import { memo, ReactNode } from "react";
import {
  Box,
  Drawer,
  drawerClasses,
  DrawerProps,
  IconButton,
  IconButtonProps,
  Stack,
} from "@mui/material";
import useVerticalSize from "@hooks/useVerticalSize";
import CloseIcon from "@icons/CloseIcon";
import { BottomSheetBackgroundImg } from "@assets/images";

type BottomSheetModalProps = {
  leftHeader?: ReactNode;
} & DrawerProps;

const BottomSheetModal = (props: BottomSheetModalProps) => {
  const { children, onClose, leftHeader, sx: sxProp, ...rest } = props;

  const { width, isMobile } = useVerticalSize();

  return (
    <Drawer
      anchor="bottom"
      sx={{
        zIndex: 900,
        [`& .${drawerClasses.paper}`]: {
          ...sx.paper,
          width,
          minHeight: width,
          maxWidth: width,
          pb: isMobile ? 5.5 : 2.5,
          ...sxProp,
        },
      }}
      {...rest}
    >
      <Stack sx={sx.leftHeader}>{leftHeader}</Stack>
      <IconButton sx={sx.close} onClick={onClose as IconButtonProps["onClick"]}>
        <CloseIcon sx={{ fontSize: 24, color: "grey.A700" }} />
      </IconButton>
      {children}
    </Drawer>
  );
};

export default memo(BottomSheetModal);

const sx = {
  paper: {
    p: 2.5,
    pt: 4,
    mx: "auto",
    borderRadius: 4,
    overflow: "auto",
    borderTop: "1px solid",
    borderColor: "secondary.main",
    bgcolor: "#191A1C",
    boxShadow: "0px 0px 250px 0px rgba(53, 223, 209, 0.25)",
    "&:before": {
      content: "''",
      position: "absolute",
      top: "15%",
      left: "50%",
      transform: "translate(-50%, -15%)",
      background: `url('${BottomSheetBackgroundImg}') no-repeat center center`,
      backgroundSize: "cover",
      width: "65%",
      aspectRatio: 1,
      zIndex: -1,
    },
  },
  leftHeader: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  close: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 20,
    right: 20,
    p: 0,
    zIndex: 50,
  },
};
