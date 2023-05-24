import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  footerBox,
  footerTitle,
  iconButton,
  raleway,
  sendButton,
} from "./styles";

const Copyright = () => {
  return (
    <Typography variant="body2" color="#ffffff" align="center" sx={raleway}>
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box component="footer" sx={footerBox} id="contact">
      {/* COPYRIGHT */}
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom sx={raleway}>
          Whiskers & Tails
        </Typography>
        <Copyright />
        <Typography variant="subtitle1" align="center" sx={raleway}>
          Made with ❤️ by Swastik & Prathamesh
        </Typography>

        <Grid container>
          {/* CONNECT WITH US */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Connect with us
            </Typography>

            <IconButton href="https://github.com/swastik-7" sx={iconButton}>
              <GitHubIcon />
            </IconButton>

            <IconButton href="#" sx={iconButton}>
              <TwitterIcon />
            </IconButton>

            <IconButton href="#" sx={iconButton}>
              <FacebookIcon />
            </IconButton>

            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Go back to top
            </Typography>
            <IconButton href="#" sx={iconButton}>
              <ArrowUpwardIcon />
            </IconButton>
          </Grid>

          {/* CONTACTS */}
          <Grid xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Contact us
            </Typography>
            <IconButton href="#" sx={iconButton}>
              <EmailIcon />
              <Typography variant="body2">
                {" "}
                whiskersandtails2022@gmail.com{" "}
              </Typography>
            </IconButton>
            <IconButton href="#" sx={iconButton}>
              <PhoneIcon />
              <Typography variant="body2"> +91-9999 999 999 </Typography>
            </IconButton>
          </Grid>

          {/* NEWSLETTER SUBSCRIPTION */}
          <Grid>
            <Typography variant="h6" gutterBottom sx={footerTitle}>
              Subscribe to our newsletter
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                sx={{
                  backgroundColor: "#ffffff",
                  fontFamily: "Raleway",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                startIcon={<SendIcon />}
                sx={sendButton}
              >
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
