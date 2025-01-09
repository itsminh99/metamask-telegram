import { uuid } from "@utils";

export const USER = {
  query_id: uuid(),
  auth_date: Date.now(),
  hash: "/user",
  user: {
    id: 1,
    is_bot: false,
    first_name: "Once",
    last_name: "CEO",
    username: "once_ceo",
    language_code: "en",
    is_premium: false,
  },
};
