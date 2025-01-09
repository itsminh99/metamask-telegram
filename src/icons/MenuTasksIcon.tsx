import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const MenuTasksIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4356 8.475L10.2663 6.62402H12.8924V2.39999H19.8976V6.62402H22.553L21.3859 8.475H11.4356ZM14.9371 3.72271H17.8549V6.09782H14.9371V3.72271Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.59998 30.3979V6.62402H8.51786L10.2663 9.53367H22.5237L24.2744 6.62616H27.2V30.4L5.59998 30.3979ZM10.2686 12.175H22.5237V13.2315H10.2686V12.175ZM22.5237 15.3445H10.2686V16.4011H22.5237V15.3445ZM21.5964 21.5951L20.3607 20.4765L15.7446 24.7451L13.314 22.5449L12.0712 23.662L15.7488 26.991L21.5964 21.5951Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(MenuTasksIcon);
