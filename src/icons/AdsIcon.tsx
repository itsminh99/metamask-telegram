import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const AdsIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <g clipPath="url(#clip0_150_6494)">
        <path
          d="M17.235 5.0174L14.6175 2.3999H12.435L15.0525 5.0174H17.235ZM3.27377 2.3999H2.40002V5.0174H5.89127L3.27377 2.3999ZM11.565 5.0174L8.94377 2.3999H6.76127L9.37878 5.0174H11.565ZM18.1088 8.50865H14.6175L17.235 5.89115H15.0525L12.435 8.50865H8.94377L11.5613 5.89115H9.37878L6.76127 8.50865H3.27377L5.89127 5.89115H2.40002V19.8562C2.40002 20.8162 3.18377 21.5999 4.14377 21.5999H19.8525C20.8163 21.5999 21.5963 20.8162 21.5963 19.8562V5.89115H20.7225L18.1088 8.50865ZM9.38252 18.9824V11.1262L16.365 15.0524L9.38252 18.9824ZM18.1088 2.3999L20.7263 5.0174H21.6V2.3999H18.1088Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_150_6494">
          <rect
            width="19.2"
            height="19.2"
            fill="white"
            transform="translate(2.40002 2.3999)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default memo(AdsIcon);
