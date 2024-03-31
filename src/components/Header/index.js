import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/Components/Header.module.css";

const Header = ({ pages }) => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={styles.header}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className={styles.toolbar}>
          <Typography
            variant="h6"
            noWrap
            onClick={() => router.push("/")}
            className={styles["logo-text"]}
          >
            Baseel
          </Typography>

          {/* Desktop Navigation Starts */}

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.label}
                className={styles["nav-button"]}
                href={page.url}
              >
                {page.label}
              </Link>
            ))}
          </Box>

          {/* Desktop Navigation Ends */}

          {/* Mobile Responsive Navigation Starts */}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link href={page.url}>{page.label}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Responsive Navigation Ends */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
