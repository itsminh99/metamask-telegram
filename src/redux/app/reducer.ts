import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertColor } from "@mui/material";
import { sessionStorage } from "@utils/storage";
import { WALLET_TYPE_STORAGE_KEY } from "@constant";

export enum AuthWalletType {
  METAMASK,
  TON_CONNECT,
  IMMUTABLE,
}

export interface Snackbar {
  message: string;
  severity: AlertColor;
  expiredIn?: number;
}

export interface AuthWallet {
  address?: string;
  type?: AuthWalletType;
  isConnecting: boolean;
  metamaskDeepLink?: string;
}

export interface AppState {
  snackbar?: Snackbar;

  auth: AuthWallet;
}

const initialState: AppState = {
  auth: {
    isConnecting: false,
    type: sessionStorage.get(WALLET_TYPE_STORAGE_KEY),
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateSnackbar: (state, action: PayloadAction<Snackbar | undefined>) => {
      state.snackbar = action?.payload;
    },
    updateAuthWallet: (state, action: PayloadAction<Partial<AuthWallet>>) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state.auth[key] = value;
      });
      if (Object.keys(action.payload).includes("type")) {
        if (Number.isInteger(action.payload?.type)) {
          sessionStorage.set(WALLET_TYPE_STORAGE_KEY, action.payload?.type);
        } else {
          sessionStorage.remove(WALLET_TYPE_STORAGE_KEY);
        }
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { updateSnackbar, updateAuthWallet } = appSlice.actions;

export default appSlice.reducer;
