import { AN_ERROR_TRY_AGAIN, EMPTY_TEXT } from "@constant";
import { OptionFormatNumber } from "@constant/types";
import { WebAppUser } from "@twa-dev/types";

export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
    .replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .replace(/-/g, "");
};

export const formatNumber = (
  number?: number | null | string,
  options: OptionFormatNumber = {},
  isFetching?: boolean,
) => {
  if (typeof number === "string") return number;
  const {
    numberOfFixed = 4,
    emptyText = EMPTY_TEXT,
    suffix,
    prefix = "",
    space = true,
    ...localeOption
  } = options;
  const suffixParsed = suffix ? `${space ? " " : ""}${suffix}` : "";
  if (!number && number !== 0)
    return (isFetching ? EMPTY_TEXT : emptyText) + suffixParsed;
  const num = Number(number || 0);
  const maximumFractionDigits = Number.isInteger(num) ? 0 : numberOfFixed;
  return (
    prefix +
    num.toLocaleString("en-US", {
      maximumFractionDigits,
      ...localeOption,
    }) +
    suffixParsed
  );
};

const addZeroFraction = (num: number) => {
  return Array.from(new Array(num)).reduce(
    (out, _, index) => (out += "0"),
    ".",
  );
};

export const formatUSDCurrency = (
  number?: number,
  options?: OptionFormatNumber,
) => {
  const { minimumFractionDigits, ...restOptions } = (options ??
    {}) as OptionFormatNumber;
  return (
    formatNumber(number, {
      minimumFractionDigits: 0,
      ...restOptions,
      style: "currency",
      currency: "USD",
      emptyText: options?.emptyText ?? "$ --",
    }) +
    (number && minimumFractionDigits && number % 1 === 0
      ? addZeroFraction(minimumFractionDigits)
      : "")
  );
};

export const formatCash = (
  value?: number,
  options?: OptionFormatNumber,
  usingK = false,
  tinyNumber = 0,
  maximumFractionDigits = 1,
) => {
  if (value === undefined) return formatNumber(value, options);
  let _options = {
    ...options,
    numberOfFixed: maximumFractionDigits,
  };

  switch (true) {
    case Boolean(value < 1e3 - tinyNumber):
      return formatNumber(value, _options);
    case Boolean(value < 1e6 - tinyNumber && usingK):
      _options = {
        ..._options,
        space: false,
        suffix: "K " + (_options?.suffix ?? ""),
      };
      return formatNumber(+(value / 1e3), _options);
    case Boolean(value < 1e6 - tinyNumber && !usingK):
      return formatNumber(value, _options);
    case Boolean(value < 1e9 - tinyNumber):
      _options = {
        ..._options,
        space: false,
        suffix: "M " + (_options?.suffix ?? ""),
      };
      return formatNumber(+(value / 1e6), _options);
    case Boolean(value < 1e12 - tinyNumber):
      _options = {
        ..._options,
        space: false,
        suffix: "B " + (_options?.suffix ?? ""),
      };
      return formatNumber(+(value / 1e9), _options);
    default:
      _options = {
        ..._options,
        space: false,
        suffix: "T " + (_options?.suffix ?? ""),
      };
      return formatNumber(+(value / 1e12), _options);
  }
};

export const slugify = (text: string) => {
  return text
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\_/g, "-") // Replace _ with -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/\-$/g, ""); // Remove trailing -
};

export const getMaxLinesCss = (lines = 2) => {
  return {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lines,
  };
};

export const checkIsMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

export const checkIsIOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);

export const shuffle = <T>(array: Array<T>): Array<T> => {
  let currentIndex = array.length,
    temporaryValue: T,
    randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const shortAddress = (address?: string) => {
  if (!address) return;
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const longTime = (value: number) => (value < 10 ? "0" + value : value);

export const spacingCapitalize = (text?: string, fallback = "N/A") => {
  if (!text) return fallback;
  text = text.trim();

  return (
    text.charAt(0).toUpperCase() +
    text
      .slice(1)
      .replace(/([A-Z])/g, text.toUpperCase() === text ? "$1" : " $1")
  );
};

export const getMessageError = (error) => {
  const graphQLMessageErrors = error?.["networkError"]?.["result"]?.errors?.map(
    (item) => item.message,
  ) as string[] | undefined;

  const message = Array.isArray(graphQLMessageErrors)
    ? graphQLMessageErrors.join(". ")
    : error["message"];

  return (
    spacingCapitalize(typeof error === "string" ? error : message) ??
    AN_ERROR_TRY_AGAIN
  );
};

export const displayMinutes = (time?: number) => {
  if (typeof time !== "number") return "--";
  const secs = time % 60;
  const minutes = parseInt(`${(time - secs) / 60}`);

  return longTime(minutes) + ":" + longTime(secs);
};

export const getName = (user?: WebAppUser) => {
  if (user?.first_name || user?.last_name)
    return `${user?.first_name} ${user?.last_name}`.trim();
  if (user?.["firstName"] || user?.["lastName"])
    return `${user?.["firstName"]} ${user?.["lastName"]}`.trim();
  return user?.username || user?.["displayName"];
};

export const getWidthText = (value: number) =>
  (value.toString().length + 1) * 8;

export const hexToRgbA = (hex: string, opacity = 1) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return `rgba(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",${opacity})`;
  }
  return;
};

export const fallbackNumber = (
  value?: string | number | null,
  fallback = 0,
) => {
  const parsedNumber = Number(value);
  if (isNaN(parsedNumber)) return fallback;
  return parsedNumber;
};

export const randomInRange = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

export const cleanObject = (paramsObject, ignoreKeys: string[] = []) => {
  const cloneParamsObject = { ...paramsObject };
  for (const keyParam in paramsObject) {
    if (
      cloneParamsObject[keyParam] &&
      typeof cloneParamsObject[keyParam] === "object" &&
      !Array.isArray(cloneParamsObject[keyParam])
    ) {
      cloneParamsObject[keyParam] = cleanObject(
        cloneParamsObject[keyParam],
        ignoreKeys,
      );
    } else if (
      !ignoreKeys.includes(keyParam) &&
      (cloneParamsObject[keyParam] === null ||
        cloneParamsObject[keyParam] === "" ||
        cloneParamsObject[keyParam] === undefined)
    ) {
      delete cloneParamsObject[keyParam];
    }
  }
  return cloneParamsObject;
};

export const parseURLSearchParams = (searchParams: URLSearchParams) => {
  const params: { [key: string]: string | string[] | undefined } | {} = {};
  searchParams.forEach((value, key) => {
    params[key] = params[key]
      ? Array.isArray(params[key])
        ? [...params[key], value]
        : [params[key], value]
      : value;
  });
  return params;
};

export const displayTime = (value: number) => {
  const days = Math.floor(value / (1000 * 60 * 60 * 24));
  const hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));

  let result = "";

  if (days > 0) {
    result += `${longTime(days)}D:`;
  }
  result += `${days > 0 ? longTime(hours) : hours}H:`;
  result += `${longTime(minutes)}M`;

  return result;
};

export const groupData = (
  data: unknown[],
  keyGroup: string,
): { [key: number]: unknown[] } => {
  if (!data) return {};
  return data.reduce((r: { [key: number]: unknown[] }, a) => {
    if (a?.[keyGroup]) {
      r[a[keyGroup]] = r[a[keyGroup]] || [];
      r[a[keyGroup]].push(a);
    }
    return r;
  }, {});
};

export const openLink = (url: string) => {
  if (url.startsWith("https://t.me")) {
    window.Telegram.WebApp.openTelegramLink(url);
  } else {
    window.Telegram.WebApp.openLink(url);
  }
};
