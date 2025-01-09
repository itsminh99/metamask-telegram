import { memo } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const MenuPlayIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize="inherit"
      {...props}
    >
      <path
        d="M23.0205 16.5851C23.0205 16.3066 22.9491 16.0468 22.8344 15.814C23.0673 15.9286 23.327 16 23.6055 16C23.884 16 24.1438 15.9286 24.3766 15.814C24.2619 16.0468 24.1906 16.3066 24.1906 16.5851C24.1906 16.8635 24.2619 17.1233 24.3766 17.3561C24.1438 17.2415 23.884 17.1701 23.6055 17.1701C23.327 17.1701 23.0673 17.2415 22.8344 17.3561C22.9491 17.1233 23.0205 16.8635 23.0205 16.5851Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4302 8.97964C15.6641 4.50812 18.6149 1.95923 23.6056 1.95923C23.7608 1.95923 23.9096 2.02087 24.0193 2.13058C24.129 2.2403 24.1906 2.3891 24.1906 2.54426C24.1906 2.69942 24.129 2.84823 24.0193 2.95794C23.9096 3.06766 23.7608 3.1293 23.6056 3.1293C19.2306 3.1293 16.82 5.14895 16.6015 8.97987C16.7044 8.98276 16.8047 9.01273 16.8924 9.06688C16.9848 9.12391 17.0595 9.20552 17.1081 9.30257L18.1167 11.3198H19.9374C20.6609 10.8085 21.483 10.4535 22.3512 10.2774C23.2195 10.1014 24.1149 10.1081 24.9804 10.2971C26.2462 10.572 27.3993 11.2232 28.2884 12.1651C29.1775 13.1071 29.7611 14.2958 29.9626 15.5753C30.1381 16.7185 30.0117 17.8792 29.5963 18.9322C28.968 20.5247 28.8171 22.7502 29.2371 24.2233L29.697 25.8298C29.9273 26.6364 30.0431 27.4714 30.041 28.3103C30.0375 29.2651 29.25 30.0409 28.2859 30.0409H25.9797C25.5101 30.0407 25.0491 29.915 24.6444 29.6767C24.2398 29.4385 23.9062 29.0964 23.6781 28.6859L20.8384 23.0205H11.1608L8.33388 28.6649C8.10679 29.0803 7.77233 29.4271 7.36543 29.6692C6.95853 29.9112 6.4941 30.0396 6.02066 30.0409H3.71445C3.25294 30.0424 2.8095 29.8615 2.48075 29.5376C2.15201 29.2137 1.9646 28.773 1.95935 28.3115C1.95734 27.4723 2.07274 26.637 2.30218 25.8298L2.76202 24.2221C3.18207 22.749 3.03113 20.5247 2.40281 18.9322C1.98662 17.8652 1.86027 16.707 2.03658 15.5753C2.23805 14.2958 2.82163 13.1071 3.71074 12.1651C4.59985 11.2232 5.75295 10.572 7.01872 10.2971C7.88427 10.1087 8.77956 10.1022 9.64773 10.2783C10.5159 10.4543 11.338 10.809 12.0617 11.3198H13.8834L14.892 9.30257C14.9406 9.20552 15.0153 9.12391 15.1077 9.06688C15.2 9.00985 15.3065 8.97964 15.415 8.97964H15.4302ZM10.1498 18.3402H11.9049C12.0601 18.3402 12.2089 18.2785 12.3186 18.1688C12.4283 18.0591 12.49 17.9103 12.49 17.7551V15.415C12.49 15.2599 12.4283 15.111 12.3186 15.0013C12.2089 14.8916 12.0601 14.83 11.9049 14.83H10.1498V13.0749C10.1498 12.9197 10.0882 12.7709 9.97847 12.6612C9.86875 12.5515 9.71995 12.4898 9.56479 12.4898H7.22465C7.06949 12.4898 6.92069 12.5515 6.81097 12.6612C6.70126 12.7709 6.63962 12.9197 6.63962 13.0749V14.83H4.88452C4.72936 14.83 4.58055 14.8916 4.47084 15.0013C4.36112 15.111 4.29949 15.2599 4.29949 15.415V17.7551C4.29949 17.9103 4.36112 18.0591 4.47084 18.1688C4.58055 18.2785 4.72936 18.3402 4.88452 18.3402H6.63962V20.0953C6.63962 20.2504 6.70126 20.3992 6.81097 20.509C6.92069 20.6187 7.06949 20.6803 7.22465 20.6803H9.56479C9.71995 20.6803 9.86875 20.6187 9.97847 20.509C10.0882 20.3992 10.1498 20.2504 10.1498 20.0953V18.3402ZM13.075 20.6803H14.2451C14.4002 20.6803 14.549 20.6187 14.6587 20.509C14.7685 20.3992 14.8301 20.2504 14.8301 20.0953C14.8301 19.9401 14.7685 19.7913 14.6587 19.6816C14.549 19.5719 14.4002 19.5103 14.2451 19.5103H13.075C12.9198 19.5103 12.771 19.5719 12.6613 19.6816C12.5516 19.7913 12.49 19.9401 12.49 20.0953C12.49 20.2504 12.5516 20.3992 12.6613 20.509C12.771 20.6187 12.9198 20.6803 13.075 20.6803ZM17.7553 20.6803H18.9253C19.0805 20.6803 19.2293 20.6187 19.339 20.509C19.4487 20.3992 19.5104 20.2504 19.5104 20.0953C19.5104 19.9401 19.4487 19.7913 19.339 19.6816C19.2293 19.5719 19.0805 19.5103 18.9253 19.5103H17.7553C17.6001 19.5103 17.4513 19.5719 17.3416 19.6816C17.2319 19.7913 17.1702 19.9401 17.1702 20.0953C17.1702 20.2504 17.2319 20.3992 17.3416 20.509C17.4513 20.6187 17.6001 20.6803 17.7553 20.6803ZM25.1747 18.1541C25.4075 18.2688 25.6673 18.3402 25.9457 18.3402C26.9134 18.3402 27.7008 17.5527 27.7008 16.5851C27.7008 15.6174 26.9134 14.83 25.9457 14.83C25.6673 14.83 25.4075 14.9014 25.1747 15.016C25.2893 14.7832 25.3607 14.5234 25.3607 14.2449C25.3607 13.2773 24.5732 12.4898 23.6056 12.4898C22.638 12.4898 21.8505 13.2773 21.8505 14.2449C21.8523 14.5129 21.9159 14.7768 22.0365 15.016C21.8037 14.9014 21.5439 14.83 21.2655 14.83C20.2978 14.83 19.5104 15.6174 19.5104 16.5851C19.5104 17.5527 20.2978 18.3402 21.2655 18.3402C21.5334 18.3384 21.7973 18.2747 22.0365 18.1541C21.9219 18.387 21.8505 18.6467 21.8505 18.9252C21.8505 19.8929 22.638 20.6803 23.6056 20.6803C24.5732 20.6803 25.3607 19.8929 25.3607 18.9252C25.3607 18.6467 25.2893 18.387 25.1747 18.1541Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(MenuPlayIcon);
