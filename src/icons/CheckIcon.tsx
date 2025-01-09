import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const CheckIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <path
        d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(CheckIcon);
