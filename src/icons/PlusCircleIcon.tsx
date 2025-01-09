import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const PlusCircleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <path
        d="M10.5 6.6665V13.3332M7.16666 9.99984H13.8333M18.8333 9.99984C18.8333 14.6022 15.1024 18.3332 10.5 18.3332C5.89762 18.3332 2.16666 14.6022 2.16666 9.99984C2.16666 5.39746 5.89762 1.6665 10.5 1.6665C15.1024 1.6665 18.8333 5.39746 18.8333 9.99984Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};

export default memo(PlusCircleIcon);
