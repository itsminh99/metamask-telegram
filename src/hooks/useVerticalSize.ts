import { MAX_WIDTH_ON_DESKTOP } from "@constant/dimension";
import { useCallback, useEffect, useMemo, useState } from "react";

export interface Size {
  width?: number;
  height?: number;
}

const useVerticalSize = () => {
  const [size, setSize] = useState<Size>({});

  const isMobile = useMemo(
    () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    []
  );

  const onResize = useCallback(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    if (width > height) {
      width = height;
      height = window.innerWidth;
    }

    if (width > MAX_WIDTH_ON_DESKTOP) {
      width = MAX_WIDTH_ON_DESKTOP;
    }

    setSize({
      width,
      height,
    });
  }, []);

  useEffect(() => {
    // Run when on mount
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return { ...size, isMobile };
};

export default useVerticalSize;
