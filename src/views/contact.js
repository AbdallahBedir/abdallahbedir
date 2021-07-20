import React from "react";
import PropTypes from "prop-types";
// Material UI icons
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MuiAlert from "@material-ui/lab/Alert";
import Box from "../components/box";
import { Formik, Form, ErrorMessage, useField } from "formik";
import {
  GitHub,
  LinkedIn,
  Code,
  Facebook,
  LocationOn,
  Email,
  Phone,
} from "@material-ui/icons";
import * as Yup from "yup";

const WhiteTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& .Mui-focused.MuiFilledInput-underline:after": {
      borderBottomColor: "white",
    },
  },
})(TextField);

const MyTextField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);

  return (
    <WhiteTextField
      error={meta.touched && meta.error ? true : false}
      variant="filled"
      label={label}
      fullWidth
      size="small"
      helperText={<ErrorMessage name={props.name} />}
      {...field}
      {...props}
    />
  );
};

const styles = (theme) => ({
  root: {
    fontFamily: [theme.typography.fontFamilySecondary, "!important"],
  },
  item: {
    paddingRight: theme.spacing(2),
  },
  overline: {
    color: [theme.palette.text.primary, "!important"],
    marginBottom: theme.spacing(1),
    fontWeight: "600",
    fontSize: ["11px", "!important"],
    letterSpacing: "0.5px",
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemText: {
    fontFamily: theme.typography.fontFamilySecondary,
    fontSize: "12px",
    color: "#bebebe",
    fontWeight: 500,
  },
  listIcon: {
    minWidth: "22px",
    "& svg": {
      fontSize: "1rem",
      color: "#bebebe",
    },
  },
  socialList: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  socialLink: {
    width: "auto",
    display: "inline-flex",
    paddingRight: "10px",
  },
  socialIcon: {
    minWidth: "35px",
    color: theme.palette.text.secondary,
    transition: "color 0.25s ease-in-out",
    "&:hover": {
      color: "#FFF",
    },
    "& svg": {
      fontSize: "1.25rem",
    },
  },
  submit: {
    margin: theme.spacing(1, 0, 4),
    fontWeight: 600,
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  spinner: {
    margin: theme.spacing(0, 2),
  },
});

function Contact(props) {
  const { classes } = props;

  const [toastState, setToastState] = React.useState({
    isOpen: false,
    success: false,
  });

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToastState({
      ...toastState,
      isOpen: false,
    });
  };

  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      setToastState({
        isOpen: true,
        success: true,
      });
      actions.resetForm();
      actions.setSubmitting(false);
    }, 2000);
  };
  const contactInfo = [
    {
      icon: <LocationOn />,
      text: "El Mahalla El Kubra, Egypt",
    },
    {
      icon: <Email />,
      text: "abdallahahmed2025@gmail.com",
    },
    {
      icon: <Phone />,
      text: "+201122427353",
    },
  ];
  const links = [
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/abdallah-bedir-288002b9/",
    },
    {
      icon: <GitHub />,
      url: "https://github.com/AbdallahBedir",
    },
    {
      icon: <Code />,
      url: "http://codepen.io/AbdallahBedir/",
    },
    {
      icon: <Facebook />,
      url: "https://www.facebook.com/profile.php?id=100007723273126",
    },
  ];
  return (
    <section id="contact" className={classes.root}>
      <Box>
        <Typography className="box-title" variant="h5">
          CONTACT
        </Typography>
        <Grid container className={classes.container}>
          <Grid item className={classes.item} sm={6} xs={12}>
            <Typography variant="body2">
              Please don’t hesitate to contact me for more information about my
              work. I am available Thursday , Fridays is a day of rest.
            </Typography>
            <List dense={false} disablePadding={true}>
              {contactInfo.map((info, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  className={classes.listItem}
                >
                  <ListItemIcon className={classes.listIcon}>
                    {info.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={info.text}
                    classes={{ primary: classes.listItemText }}
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
            <List
              className={classes.socialList}
              dense={true}
              disablePadding={true}
              component="div"
            >
              {links.map((link, index) => (
                <ListItem
                  key={index}
                  className={classes.socialLink}
                  component="a"
                  href={link.url}
                  target="_blank"
                  disableGutters={true}
                >
                  <ListItemIcon className={classes.socialIcon}>
                    {link.icon}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item className={classes.item} sm={6} xs={12}>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(3, "Minimum 3 characters")
                  .max(25, "Must be 25 characters or less")
                  .required("Name is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                message: Yup.string()
                  .max(225, "Must be 225 characters or less")
                  .required("Message is required"),
              })}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <div>
                  <Form>
                    <MyTextField name="name" type="text" label="Name" />
                    <MyTextField name="email" type="email" label="Email" />
                    <MyTextField
                      name="message"
                      type="text"
                      label="Message"
                      multiline
                      rows={5}
                    />

                    <Button
                      type="submit"
                      className={classes.submit}
                      disabled={formik.isSubmitting}
                      variant="contained"
                      color="secondary"
                    >
                      Send Message
                    </Button>
                    {formik.isSubmitting ? (
                      <CircularProgress
                        className={classes.spinner}
                        size={24}
                        thickness={4}
                      />
                    ) : (
                      ""
                    )}
                  </Form>
                  <Snackbar
                    open={toastState.isOpen}
                    autoHideDuration={3000}
                    onClose={handleToastClose}
                    TransitionComponent={Grow}
                  >
                    <MuiAlert
                      elevation={6}
                      variant="filled"
                      onClose={handleToastClose}
                      severity={toastState.success ? "success" : "error"}
                    >
                      {toastState.success
                        ? "Message sent successfully"
                        : "An error occured while sending the message"}
                    </MuiAlert>
                  </Snackbar>
                </div>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
