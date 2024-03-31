import {
  Paper,
  TextField,
  Typography,
  Box,
  TextareaAutosize,
  Button,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "@/styles/Components/ContactForm.module.css"

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Enter valid email address")
        .max(100, "Email address must be below 100 characters")
        .required("Email field is required"),

      name: Yup.string()
        .max(50, "Name must be below 50 characters")
        .required("Name field is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .max(250, "Message must be below 180 characters")
        .required("Message field is required"),
    }),

    onSubmit: async (values, helpers) => {
      console.log(values);
    },
  });
  return (
    <>
      <Paper elevation={3} className={styles["contact-form"]}>
        <Typography
          component={"h1"}
          variant="h1"
          sx={{ fontSize: { xs: 35, sm: 50 }, fontFamily: "monospace" }}
        >
          Contact Form
        </Typography>

        <Box className={styles["contact-field-wrapper"]}>
          <TextField
            id="name"
            name="name"
            type="text"
            variant="outlined"
            placeholder="Name"
            required
            error={Boolean(formik.touched.name && formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            sx={{ width: { xs: 230, sm: 300 } }}
          />
        </Box>

        <Box className={styles["contact-field-wrapper"]}>
          <TextField
            id="email"
            name="email"
            type="text"
            variant="outlined"
            placeholder="Email"
            required
            error={Boolean(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            sx={{ width: { xs: 230, sm: 300 } }}
          />
        </Box>

        <Box className={styles["contact-field-wrapper"]}>
          <TextField
            id="message"
            placeholder="Message"
            multiline
            InputProps={{
              inputComponent: TextareaAutosize,
              inputProps: {
                style: {
                  resize: "auto",
                },
              },
            }}
            required
            error={Boolean(formik.touched.message && formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            sx={{ width: { xs: 230, sm: 300 } }}
          />
        </Box>

        <Button variant="contained" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Paper>
    </>
  );
};

export default ContactForm;
