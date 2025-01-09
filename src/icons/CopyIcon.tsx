import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const CopyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <rect
        x="8.72728"
        y="8.1792"
        width="14.1818"
        height="14.1818"
        rx="1"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.09091 1.63623C1.53863 1.63623 1.09091 2.08395 1.09091 2.63623V14.818C1.09091 15.3703 1.53863 15.818 2.09091 15.818H7.63637V8.09078C7.63637 7.53849 8.08408 7.09078 8.63637 7.09078H15.2727V2.63623C15.2727 2.08395 14.825 1.63623 14.2727 1.63623H2.09091ZM15.2727 14.818C15.2727 15.3703 14.825 15.818 14.2727 15.818H15.2727V14.818Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(CopyIcon);
