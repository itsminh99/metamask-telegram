import { memo, useMemo } from "react";
import { Box, ButtonBase, Stack, StackProps, Typography } from "@mui/material";
import BottomSheetModal from "@components/BottomSheetModal";
import { Button } from "@components/shared";
import useToggle from "@hooks/useToggle";
import { MetaMaskImg } from "@assets/images/account";
import { useSDK } from "@metamask/sdk-react";
import { AuthWalletType, useAuthWallet } from "@redux/app";
import { getAuthIconByType } from "../helpers";

type ItemProps = {
  icon: string;
  label: string;
} & StackProps;

const ConnectWallet = () => {
  const [isShow, onShow, onHide] = useToggle();
  const { sdk, connected } = useSDK();
  const { onUpdateAuthWallet, isConnecting, type, onResetAuth } =
    useAuthWallet();

  const icon = useMemo(() => getAuthIconByType(type), [type]);

  const onMetaMaskConnect = async () => {
    try {
      onUpdateAuthWallet({ isConnecting: true, type: AuthWalletType.METAMASK });
      const accounts = await sdk?.connect();
      if (accounts?.length) {
        onUpdateAuthWallet({ isConnecting: false, address: accounts[0] });
      }
    } catch (err) {
    } finally {
      onUpdateAuthWallet({ isConnecting: false });
    }
  };

  const onClose = () => {
    onHide();
    if (connected) {
      sdk?.terminate();
    }
    onResetAuth();
  };

  return (
    <>
      <Button fullWidth onClick={onShow} variant="contained">
        Connect your wallet
      </Button>

      <BottomSheetModal
        open={isShow}
        onClose={onClose}
        sx={{
          "&:before": {
            content: "none",
          },
          minHeight: 320,
        }}
      >
        <Stack flex={1} alignItems="center">
          <Typography variant="h2" mb={6} textAlign="center">
            Connect wallet
          </Typography>

          {isConnecting ? (
            <>
              <Box component="img" src={icon} width="auto" height={40} />
              <Typography variant="h6" mt={2} textAlign="center">
                Connecting...
              </Typography>
            </>
          ) : (
            <Stack spacing={1.5} flex={1} width="100%">
              <Item
                icon={MetaMaskImg}
                label="MetaMask"
                onClick={onMetaMaskConnect}
              />
            </Stack>
          )}
        </Stack>
      </BottomSheetModal>
    </>
  );
};

export default memo(ConnectWallet);

const Item = (props: ItemProps) => {
  const { icon, label, sx, ...rest } = props;

  return (
    <Stack
      width="100%"
      overflow="hidden"
      direction="row"
      alignItems="center"
      spacing={1.5}
      px={2}
      py={1.25}
      borderRadius={2}
      border="1px solid transparent"
      component={ButtonBase}
      justifyContent="flex-start"
      sx={{
        background:
          "linear-gradient(#212026, #212026) padding-box, linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)) border-box",
        ...sx,
      }}
      {...rest}
    >
      <Box component="img" src={icon} width="auto" height={30} alt="" />
      <Typography variant="h6" fontWeight={600}>
        {label}
      </Typography>
    </Stack>
  );
};
