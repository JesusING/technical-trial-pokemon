import { cardStyles } from "./card-styles";
import { Divider, Paper, Typography } from "@mui/material";

export const Card = (props: {
  id: string;
  title: string;
  children?: React.ReactNode;
}) => {
  const styles = cardStyles();
  const { id, title, children} = props;

  return (
    <Paper
      id={id}
      sx={{
        ...styles.card_style
      }}>
      <>
      <div style={{display: "flex"}}>
        <Typography variant="h4" sx={{ wordBreak: "keep-all" }}>
          {title}
        </Typography>
        
      </div>
        <Divider sx={{ mt: "0.5rem", mb: "0.5rem", borderColor: "#EBEBEB" }}></Divider>
      </>
      {children}
    </Paper>
  );
};
