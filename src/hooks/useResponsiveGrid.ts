import { Theme, useMediaQuery } from "@mui/material";
import { MEDIA } from "../app-config/constants";

export const useResponsiveGrid = () => {
  const matchesLg = useMediaQuery((theme: Theme) => theme.breakpoints.up(MEDIA.large), { noSsr: true });
  const matchesMd = useMediaQuery((theme: Theme) => theme.breakpoints.up(MEDIA.medium), { noSsr: true });
  const matchesSm = useMediaQuery((theme: Theme) => theme.breakpoints.up(MEDIA.small), { noSsr: true });
  const matchesXs = useMediaQuery((theme: Theme) => theme.breakpoints.up(MEDIA.xsmall), { noSsr: true });

  const handleMediaQuery = (lg: number, md: number, sm: number, xs: number) => {
    if (matchesLg) {
      return lg;
    } else if (matchesMd) {
      return md;
    } else if (matchesSm) {
      return sm;
    } else if (matchesXs) {
      return xs;
    } else return 1;
  };

  return {
    handleMediaQuery
  };
};
