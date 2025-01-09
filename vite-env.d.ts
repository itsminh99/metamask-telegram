/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MINI_APP_NAME: string;
  readonly VITE_MINI_GAME_NAME: string;
  readonly VITE_TELEGRAM_ANALYTICS_TOKEN: string;
  readonly VITE_NODE_ENV: string;
  readonly VITE_ADS_BLOCK_ID: string;
  readonly VITE_API_URL: string;
  readonly VITE_GOOGLE_ANALYTICS_ID: string;
  readonly VITE_ANN_POST_ID: string;
  readonly VITE_COLYSEUS_URL: string;
  readonly VITE_INFURA_API_KEY: string;
  readonly VITE_IMMUTABLE_CLIENT_ID: string;
  readonly VITE_IMMUTABLE_PUBLISHABLE_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
