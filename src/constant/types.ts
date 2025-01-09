export type Option = {
  label: string;
  value: string | number;
};

export type OptionFormatNumber = {
  numberOfFixed?: number;
  emptyText?: string;
  localeOption?: Intl.NumberFormatOptions;
  prefix?: string;
  suffix?: string;
  space?: boolean;
} & Intl.NumberFormatOptions;

export type CssOptions = {
  width?: number | string | { [key: string]: number | string };
  height?: number | string | { [key: string]: number | string };
  fontFamily?: string;
  borderColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  hoverBorderColor?: string;
  color?: string;
  background?: string;
};

export type ErrorResponse = {
  statusCode: number;
  message: string | string[];
};

export interface Paging {
  pageIndex: number;
  pageSize: number;
  totalPages?: number;
  totalItems?: number;
}

export type Params = {
  [key: string]: string | number | string[] | number[] | boolean | undefined;
};

export type ItemListResponse<T> = Paging & {
  totalPages: number;
  totalItems: number;
  items: T[];
  filters?: Params;
};

export interface BaseQueries {
  pageIndex: number;
  pageSize: number;

  // CLIENT
  concat?: boolean;
}
