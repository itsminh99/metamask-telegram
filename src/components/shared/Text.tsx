import { Fragment, memo } from "react";
import { Typography, TypographyProps } from "@mui/material";

const Text = (props: TypographyProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest}>
      {typeof children === "string"
        ? getChildrenArray(children).map((line, index) => (
            <Fragment key={`${line}_${index}`}>
              {index !== 0 && <br />}
              {line}
            </Fragment>
          ))
        : children}
    </Typography>
  );
};

export default memo(Text);

const getChildrenArray = (value) => {
  if (!value || typeof value !== "string") return [value];
  return value?.replace(/(?:\r\n|\r|\n)/g, "<∆br/>")?.split("<∆br/>");
};
