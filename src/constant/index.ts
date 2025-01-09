import { Platforms } from "@twa-dev/types";

export const EMPTY_TEXT = "-";

export const AN_ERROR_TRY_AGAIN = "An error occurred. Please try again!";
export const ACCESS_TOKEN_STORAGE_KEY = "aT";
export const WALLET_TYPE_STORAGE_KEY = "wT";
export const SCROLL_LAYOUT_ID = "scroll-layout";

export const PLATFORMS_SUPPORTED = [
  "android",
  "android_x",
  "ios",
  "tdesktop",
  "macos",
  "unigram",
] as Platforms[];

export const API_TIMEOUT = 30_000; //s

export const DEFAULT_PAGE_INDEX = 1;
export const DEFAULT_PAGE_SIZE = 20;

export const DEFAULT_PAGING = {
  pageIndex: DEFAULT_PAGE_INDEX,
  pageSize: DEFAULT_PAGE_SIZE,
};
