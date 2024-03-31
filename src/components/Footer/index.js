import { Box, Paper, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import styles from "@/styles/Components/Footer.module.css";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Paper
      className={styles["footer-wrapper"]}
      >
        <Typography component={"h3"} variant="h3" className={styles["title"]}>
          <CopyrightIcon className={styles["copyright-icon"]} /> 2024 Baseel
        </Typography>
      </Paper>
    </Box>
  );
};

export default Footer;
