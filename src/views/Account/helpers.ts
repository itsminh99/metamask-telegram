import { ImmutableImg, MetaMaskImg, WalletImg } from "@assets/images/account";
import { AuthWalletType } from "@redux/app";

export const getAuthIconByType = (type?: AuthWalletType) => {
  switch (type) {
    case AuthWalletType.METAMASK:
      return MetaMaskImg;
    case AuthWalletType.TON_CONNECT:
      return WalletImg;
    case AuthWalletType.IMMUTABLE:
      return ImmutableImg;
    default:
      return;
  }
};
