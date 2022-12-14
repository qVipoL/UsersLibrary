import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Typography
        variant={"body2"}
        fontWeight={600}
        component={"span"}
        color={"white"}
      >
        Made By Andrey Burtsev
      </Typography>
    </Box>
  );
};

export default Footer;
