import React, { FC, ReactNode } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import styles from "./styles";
import Footer from "../Footer";
import Header from "../Header";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <Box sx={styles.containerWrapper}>
      <Header />
      <CssBaseline />
      <Container component={"main"} maxWidth={"lg"} sx={styles.container}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Wrapper;
