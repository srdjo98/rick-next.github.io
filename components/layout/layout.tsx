import { ReactElement } from "react";
import Navbar from "./navbar";
import { Box, Container } from "@mui/material";

const Layout = ({ children }: { children: ReactElement }) => (
  <Box
    sx={{
      height: "100vh",
      backgroundImage: 'url("/images/background.jpg")',
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <Navbar />
    <Container
      maxWidth="md"
      sx={{ pb: "0.7rem", pt: "0.5rem", textAlign: "center" }}
    >
      {children}
    </Container>
  </Box>
);

export default Layout;
