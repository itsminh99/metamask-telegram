import { memo, ReactNode } from "react";
import { MetaMaskProvider as LibMetaMaskProvider } from "@metamask/sdk-react";

type MetaMaskProviderProps = {
  children: ReactNode;
};

const MetaMaskProvider = (props: MetaMaskProviderProps) => {
  return (
    <LibMetaMaskProvider
      debug
      sdkOptions={{
        dappMetadata: {
          name: "Demo Connect",
          url: new URL(window.location.href).origin,
        },
        infuraAPIKey: "7555596b2b014fbb8a61b6fdac0dc401",
      }}
      {...props}
    />
  );
};

export default memo(MetaMaskProvider);
