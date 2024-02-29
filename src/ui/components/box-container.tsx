import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export const BoxContainer = function (props: { children: JSX.Element }) {
  const { children } = props;

  return (
    <Box
      component="div"
      sx={{
        flexGrow: 1,
        pt: 4,
        pl: { xs: 1, sm: 6, md: "10vw" },
        pr: { xs: 1, sm: 1, md: "10vw" },
        m: "0 auto"
      }}>
      {children}
      <Outlet />
    </Box>
  );
};
