import { useCallback, useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import { Stack } from "@mui/material";
import useVerticalSize from "./hooks/useVerticalSize";
import "./App.css";
import { PLATFORMS_SUPPORTED } from "@constant";
import WalletInfo from "@views/Account/WalletInfo";

WebApp.setHeaderColor("#1a1a1a");

export default function WLApp() {
  const { width, isMobile } = useVerticalSize();
  const [isReady, setIsReady] = useState<boolean>(false);
  const sViewHeightRef = useRef<number>(
    typeof window !== "undefined" ? window.Telegram.WebApp.viewportHeight : 0
  );

  const onSetViewHeight = useCallback(() => {
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const onSetSViewHeight = useCallback(() => {
    // if (sViewHeightRef.current <= window.Telegram.WebApp.viewportHeight) {
    sViewHeightRef.current = window.Telegram.WebApp.viewportHeight;
    document.documentElement.style.setProperty(
      "--svh",
      `${window.Telegram.WebApp.viewportHeight}px`
    );
    // }
  }, [width]);

  useEffect(() => {
    setTimeout(() => {
      onSetViewHeight();
    }, 1000);
  }, [onSetViewHeight, isReady]);

  useEffect(() => {
    onSetSViewHeight();

    window.Telegram.WebApp.onEvent("viewportChanged", () => {
      onSetSViewHeight();
    });

    window.addEventListener("resize", () => {
      onSetViewHeight();
    });
  }, [onSetSViewHeight]);

  useEffect(() => {
    window.Telegram.WebApp.expand();

    window.Telegram.WebApp.setHeaderColor("secondary_bg_color");
    window.Telegram.WebApp.enableClosingConfirmation();
    requestWriteAccess();

    setIsReady(true);
    sViewHeightRef.current = window.Telegram.WebApp.viewportHeight;
  }, []);

  useEffect(() => {
    if (isMobile) return;
    document.body.style.backgroundColor = "#111111";
  }, [isMobile]);

  useEffect(() => {
    const isMacOs = checkIsMacOS();
    if (isMacOs) return;
    document.body.classList.add("scrollbar");
  }, []);

  if (!isReady) return null;

  return (
    <>
      {typeof window === "undefined" ||
      PLATFORMS_SUPPORTED.includes(window.Telegram.WebApp.platform) ? (
        <RouteList />
      ) : (
        <Stack
          maxWidth={width}
          width={width}
          flex={1}
          bgcolor="background.default"
        >
          <RouteList />
        </Stack>
      )}
    </>
  );
}

const RouteList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WalletInfo />} />
      </Routes>
    </Router>
  );
};

const requestWriteAccess = (retries = 3) => {
  if (
    window.Telegram.WebApp.initDataUnsafe.user?.allows_write_to_pm === false &&
    retries > 0
  ) {
    window.Telegram.WebApp.requestWriteAccess((access) => {
      if (!access) {
        requestWriteAccess(retries - 1);
      }
    });
  }
};

const checkIsMacOS = () =>
  ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(
    window?.navigator?.["userAgentData"]?.platform ||
      window?.navigator?.platform
  ) !== -1;
