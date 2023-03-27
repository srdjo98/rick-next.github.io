import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ bgcolor: "#728C69" }}>
      <Toolbar>
        <Link href={"/"}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Link>
        <Link href={"/locations"}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, pl: "1.25rem" }}
          >
            Locations
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Navbar;
