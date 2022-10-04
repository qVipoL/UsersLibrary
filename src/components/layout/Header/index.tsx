import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.header}>
      <Typography variant={"h3"} component={"h1"}>
        Users Library
      </Typography>
    </Box>
  );
};

export default Header;
