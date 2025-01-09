import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const WarningIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <path
        d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(WarningIcon);
