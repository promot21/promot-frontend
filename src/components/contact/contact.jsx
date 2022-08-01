import React, { useState } from "react";
import { Alert, Grid, Snackbar, Stack } from "@mui/material";
import {
  InputLabel,
  Text,
  DataInputField,
  Title,
  MessageInput,
  SubmitButton,
} from "./contact.components";
import { OuterWrapper, InnerWrapper } from "../wrapper/wrapper";
import { saveUserQuery } from "../../services/apiFunctions/contact";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertText, setAlertText] = useState("");
  const [open, setOpen] = useState(false);

  const saveQuery = async () => {
    if (validate()) {
      const queryData = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      const response = await saveUserQuery(queryData);
      // console.log(response);
      if (response.status === 200) {
        showAlert(response.data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else showAlert("Error saving the query.");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Snackbar open={open} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            <strong>Alert:</strong> {alertText}
          </Alert>
        </Snackbar>
        <Grid
          container
          sx={{
            mt: { xs: "50px", sm: "140px" },
            mb: "75px",
            mx: "auto",
            width: { xs: "90%", sm: "80%" },
          }}
        >
          <Grid item xs={12} sm={6} mb={5}>
            <Title>Contact Us</Title>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={0.5}
            >
              <Text mb={3}>We would love to hear from you!</Text>
              <Stack direction="row" spacing={1}>
                <Text heading="#adadad">Address: </Text>
                <Text>Chandigarh, India</Text>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Text heading="#adadad">Phone: </Text>
                <Text>+91 98781 8190, +91 79734 95965</Text>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Text heading="#adadad">Hours: </Text>
                <Text>10:00 am - 5:00 pm</Text>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Stack component="form">
              <DataInputField
                label="Your name"
                value={name}
                setValue={setName}
              />
              <DataInputField
                label="Your email"
                value={email}
                setValue={setEmail}
              />
              <DataInputField
                label="Subject"
                value={subject}
                setValue={setSubject}
              />
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={0.5}
                mb={2.5}
              >
                <InputLabel>Your message (optional)</InputLabel>
                <MessageInput
                  minRows={8}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ width: window.screen.width < 550 ? "90%" : "93%" }}
                />
                <SubmitButton onClick={saveQuery}>Submit</SubmitButton>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </InnerWrapper>
    </OuterWrapper>
  );

  function validate() {
    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!name) {
      showAlert("Please enter your Name");
      return false;
    }
    if (!regex.test(email)) {
      showAlert("Please enter a valid Email address");
      return false;
    }
    if (!subject) {
      showAlert("Please enter the Subject");
      return false;
    }
    return true;
  }

  function showAlert(text) {
    setAlertText(text);
    setOpen(true);
  }
}

export default Contact;
