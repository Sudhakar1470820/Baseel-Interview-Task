import { Typography } from "@mui/material";
import styles from "@/styles/Components/ProfileDetail.module.css";

const ProfileDetails = ({ profileData }) => {
  return (
    <>
      <Typography
        component={"h3"}
        variant="h3"
        className={styles["profile-title"]}
      >
        User Profile
      </Typography>
      <Typography component={"p"} className={styles["profile-data"]}>
        User Name : {profileData.name}
      </Typography>
      <Typography component={"p"} className={styles["profile-data"]}>
        User Email : {profileData.email}
      </Typography>
      <Typography component={"p"} className={styles["profile-data"]}>
        Website : {profileData.website}
      </Typography>
    </>
  );
};

export default ProfileDetails;
