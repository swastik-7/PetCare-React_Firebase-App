import * as React from "react";
import { Link, Toolbar, Typography } from "@mui/material";
import { link, navbarToolbar, title, titleToolbar } from "./styles";
import { Button } from "@mui/material";
import { boldRaleway, button, cardMedia, raleway } from "./styles";

const Navbar = (props) => {
  const { sections } = props;

  return (
    <React.Fragment id="">
      {/* TITLE */}
      <Toolbar sx={titleToolbar}>
        <Typography
          variant="h3"
          color="inherit"
          align="center"
          noWrap
          sx={title}
        >
          WHISKERS & TAILS
        </Typography>
      </Toolbar>

      {/* LINKS TO VARIOUS SECTIONS */}
      <Toolbar component="nav" variant="dense" sx={navbarToolbar}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="h6"
            href={section.url}
            sx={link}
          >
            {section.title}
          </Link>
        ))}
        <Button
            href="/services"
            sx={button}
          >
            Services
          </Button>
      </Toolbar>
    </React.Fragment>
  );
};

export default Navbar;
