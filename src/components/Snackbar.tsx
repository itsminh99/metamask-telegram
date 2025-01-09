import { memo, useEffect } from "react";
import { Typography } from "@mui/material";
import { useSnackbar } from "@redux/app";

const Snackbar = () => {
  const { snackbar, onUpdateSnackbar } = useSnackbar();

  useEffect(() => {
    if (!snackbar) return;

    let timeout: NodeJS.Timeout | null = null;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      onUpdateSnackbar(undefined);
    }, snackbar.expiredIn ?? 3000);
  }, [onUpdateSnackbar, snackbar]);

  if (!snackbar) return null;

  return (
    <Typography
      variant="caption"
      fontWeight={500}
      px={2}
      py={0.5}
      borderRadius={1}
      bgcolor={`${snackbar.severity}.main`}
      position="fixed"
      zIndex={1000}
    >
      {snackbar.message}
    </Typography>
  );
};

export default memo(Snackbar);
