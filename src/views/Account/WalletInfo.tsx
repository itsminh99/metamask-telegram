import { memo, useEffect, useMemo, useRef } from "react";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { typography } from "@utils/material";
import { ConnectWallet } from "./components";
import { AuthWalletType, useAuthWallet } from "@redux/app";
import { useSDK } from "@metamask/sdk-react";
import { getAuthIconByType } from "./helpers";

type WalletInfoProps = {};

const WalletInfo = (props: WalletInfoProps) => {
  const { sdk, account, connected } = useSDK();
  const { type, onResetAuth, onUpdateAuthWallet, address } = useAuthWallet();

  const icon = useMemo(() => getAuthIconByType(type), [type]);
  const addressRef = useRef<string | undefined>();

  const onDisconnect = async () => {
    switch (type) {
      case AuthWalletType.METAMASK:
        if (connected) {
          await sdk?.terminate();
        }
        break;
      default:
        break;
    }
    onResetAuth();
  };

  useEffect(() => {
    console.log(account, type);

    switch (type as AuthWalletType | undefined) {
      case AuthWalletType.METAMASK:
        onUpdateAuthWallet({
          address: account,
          type: account ? AuthWalletType.METAMASK : type,
        });
        break;
      default:
        break;
    }
  }, [type, account]);

  useEffect(() => {
    addressRef.current = address;
  }, [address]);

  return (
    <Stack width="100%" spacing={2} mt={4}>
      <Typography variant="h4">Your Wallet</Typography>
      {address && icon ? (
        <Stack spacing={0.5}>
          <Stack
            sx={{
              background:
                "linear-gradient(0deg, rgba(21, 25, 48, 0.5), rgba(21, 25, 48, 0.5)), linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
            }}
            direction="row"
            alignItems="center"
            spacing={1}
            border="1px solid rgba(255, 255, 255, 0.05)"
            py={0.5}
            px={1.5}
            color="grey.400"
            borderRadius={1000}
          >
            <Box component="img" src={icon} width="auto" height={20} />
            <Typography noWrap textAlign="center" color="inherit">
              {address}
            </Typography>
          </Stack>
          <ButtonBase
            onClick={onDisconnect}
            sx={{
              ...typography.caption,
              borderRadius: 0.5,
              alignSelf: "flex-end",
              color: "error.main",
              textAlign: "right",
              "&:hover": {
                opacity: 0.75,
              },
            }}
          >
            Disconnect
          </ButtonBase>
        </Stack>
      ) : (
        <ConnectWallet />
      )}
    </Stack>
  );
};

export default memo(WalletInfo);
