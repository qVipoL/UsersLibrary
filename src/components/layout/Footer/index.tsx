import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Typography variant={"body2"} component={"span"}>
        Made By Andrey Burtsev
      </Typography>
    </Box>
  );
};

export default Footer;
