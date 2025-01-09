"use client";

import { memo, useMemo } from "react";
import {
  buttonClasses,
  CircularProgress,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { typography } from "@utils/material";
import { CssOptions } from "@constant/types";

type Linear = "primary" | "secondary" | "white";

export type ButtonProps = MuiButtonProps & {
  css?: CssOptions;
  target?: string;
  submitting?: boolean;
  to?: string;
  linear?: Linear;
  disableKeepCss?: boolean;
};

const Button = (props: ButtonProps) => {
  const {
    sx,
    css,
    submitting,
    disabled,
    children,
    linear,
    disableKeepCss,
    className,
    ...rest
  } = props;

  const buttonSx = useMemo(() => {
    const defaultSx = getDefaultSx(css, linear);

    return { ...defaultSx, ...sx };
  }, [css, sx, linear]);

  return (
    <MuiButton
      sx={buttonSx as ButtonProps["sx"]}
      disabled={submitting || disabled}
      className={disableKeepCss ? "keep-linear" : className}
      {...rest}
    >
      {submitting ? <CircularProgress size={20} color="inherit" /> : children}
    </MuiButton>
  );
};

export default memo(Button);

const getDefaultSx = (options?: CssOptions, linear?: Linear) => ({
  height: options?.height ?? 40,
  ...typography.h6,
  fontWeight: 600,
  textAlign: "center",
  boxSizing: "border-box",
  textTransform: "uppercase",
  border: "2px solid transparent",
  borderRadius: 1.25,
  "&.MuiButton-contained": {
    borderColor: options?.borderColor ?? "transparent",
    color: options?.color ?? "text.secondary",
    backgroundColor: linear ? undefined : options?.backgroundColor,
    background: linear
      ? `linear-gradient(${
          linear === "primary"
            ? "#DEF141,#DEF141"
            : linear === "secondary"
              ? "#35DFD1, #35DFD1"
              : "#FFFFFF, #FFFFFF"
        }) padding-box, linear-gradient(183.51deg, ${
          linear === "primary"
            ? "#DEF141"
            : linear === "secondary"
              ? "#35DFD1"
              : "#FFFFFF"
        } 1.99%, ${
          linear === "primary"
            ? "#63730C"
            : linear === "secondary"
              ? "#0A4F6B"
              : "#696969"
        } 164.31%) border-box`
      : undefined,
    "&:hover": {
      opacity: 0.9,
    },
    // "&.Mui-disabled": {
    //   opacity: 0.7,
    // },
    "&.Mui-disabled:not(.keep-linear)": {
      borderColor: "grey.A100",
      background: "none",
      backgroundColor: "#394045",
      color: "grey.A700",
      "& *": {
        color: "grey.A700",
      },
      "& img": {
        filter: "grayscale(100%)",
      },
    },
  },
  "&.MuiButton-outlined": {
    borderColor: options?.borderColor ?? "divider",
    color: options?.color ?? "common.white",
    backgroundColor: options?.backgroundColor ?? "rgb(30, 34, 53)",

    "&:hover": {
      backgroundColor: options?.hoverBackgroundColor ?? "rgb(30, 34, 53, .8)",
      borderColor: options?.hoverBackgroundColor ?? "divider",
    },
  },
  [`&.${buttonClasses.sizeLarge}`]: {
    height: options?.height ?? 56,
    ...typography.h4,
    borderRadius: 2,
  },
  "&.MuiButton-text": {
    height: "fit-content",
  },
});
