import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const ChevronIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <path
        d="M6.48999 20.1301L8.25999 21.9001L18.16 12.0001L8.25999 2.1001L6.48999 3.8701L14.62 12.0001L6.48999 20.1301V20.1301Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(ChevronIcon);
