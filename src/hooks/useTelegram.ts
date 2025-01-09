import { USER } from "@mocks/user";
import { WebAppUser } from "@twa-dev/types";
import { useMemo } from "react";

const tg = window.Telegram.WebApp;

export function useTelegram() {
  const initData = useMemo(
    () => (tg?.initDataUnsafe?.user?.id ? tg.initDataUnsafe : USER),
    [],
  );

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user: (initData?.user
      ? { ...initData.user, name: getName(initData?.user) }
      : initData?.user) as WebAppUser & {
      name?: string;
      added_to_attachment_menu?: boolean;
      allows_write_to_pm?: boolean;
    },
    queryId: initData?.query_id,
    isExpanded: true,
  };
}

const getName = (user?: WebAppUser) => {
  if (user?.first_name || user?.last_name)
    return `${user?.first_name} ${user?.last_name}`.trim();
  return user?.username;
};
