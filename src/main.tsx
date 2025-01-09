import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "redux/configureStore";
import WebApp from "@twa-dev/sdk";
import Snackbar from "@components/Snackbar.tsx";
import ThemeProvider from "@contexts/ThemeProvider.tsx";
import MetaMaskProvider from "@contexts/MetaMaskProvider.tsx";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <MetaMaskProvider>
        <App />
        <Snackbar />
      </MetaMaskProvider>
    </Provider>
  </ThemeProvider>
);
