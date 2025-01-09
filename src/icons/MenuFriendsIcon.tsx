import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const MenuFriendsIcon = (props: SvgIconProps) => {
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
        d="M22.8268 17.5067C24.6534 18.7467 25.9334 20.4267 25.9334 22.6667V26.6667H31.2668V22.6667C31.2668 19.76 26.5068 18.04 22.8268 17.5067Z"
        fill="currentColor"
      />
      <path
        d="M12.6001 16C15.5456 16 17.9334 13.6122 17.9334 10.6667C17.9334 7.72116 15.5456 5.33334 12.6001 5.33334C9.65454 5.33334 7.26672 7.72116 7.26672 10.6667C7.26672 13.6122 9.65454 16 12.6001 16Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6001 16C23.5468 16 25.9334 13.6133 25.9334 10.6667C25.9334 7.72001 23.5468 5.33334 20.6001 5.33334C19.9734 5.33334 19.3868 5.46668 18.8268 5.65334C19.9334 7.02668 20.6001 8.77334 20.6001 10.6667C20.6001 12.56 19.9334 14.3067 18.8268 15.68C19.3868 15.8667 19.9734 16 20.6001 16Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6001 17.3333C9.04014 17.3333 1.93347 19.12 1.93347 22.6667V26.6667H23.2668V22.6667C23.2668 19.12 16.1601 17.3333 12.6001 17.3333Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(MenuFriendsIcon);
