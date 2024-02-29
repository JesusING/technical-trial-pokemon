import { Typography } from "@mui/material";

export const NoRecordsFound = function () {
  return (
    <div id="no_records_container">
      <Typography variant="h1" justifyItems="center" sx={{ fontWeight: 500 }}>
        No results
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
        Pokemon not found
      </Typography>
    </div>
  );
};
