import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useCallback } from "react";
import { AuthWallet, updateAuthWallet, updateSnackbar } from "./reducer";
import { AlertColor } from "@mui/material";
import { clientStorage } from "@utils/storage";

export const useSnackbar = () => {
  const dispatch = useAppDispatch();

  const snackbar = useAppSelector((state) => state.app?.snackbar);

  const onUpdateSnackbar = useCallback(
    (
      message?: string,
      severity = "success" as AlertColor,
      expiredIn = 3000
    ) => {
      dispatch(
        updateSnackbar(message ? { message, severity, expiredIn } : undefined)
      );
    },
    [dispatch]
  );

  return {
    snackbar,
    onUpdateSnackbar,
  };
};

export const useAuthWallet = () => {
  const dispatch = useAppDispatch();

  const authWallet = useAppSelector((state) => state.app.auth);

  const onUpdateAuthWallet = useCallback(
    (data: Partial<AuthWallet>) => {
      dispatch(updateAuthWallet(data));
    },
    [dispatch]
  );

  const onResetAuth = useCallback(() => {
    clientStorage.remove(".MMSDK_cached_address");
    clientStorage.remove(".MMSDK_cached_chainId");
    clientStorage.remove(".sdk-comm");
    dispatch(
      updateAuthWallet({
        address: undefined,
        isConnecting: false,
        type: undefined,
        metamaskDeepLink: undefined,
      })
    );
  }, [dispatch]);

  return {
    ...authWallet,
    onUpdateAuthWallet,
    onResetAuth,
  };
};
