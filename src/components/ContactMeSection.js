import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values); // pass arguments that submit function expects
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().optional(),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    })
  });

  // Show an alert if form is submitted successfully and reset it after it
  useEffect(() => {
    if (response) {
      // display alert on Submit
      onOpen(response.type, response.message);
      // check if response was successful and reset the form
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          { /* Link onSubmit prop and formik handleSubmit function */ }
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              { /* Field is invalid if it is touched and validation failed */ }
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  data-testid="firstName"
                  {...formik.getFieldProps("firstName")} // make the input component from Chaikra UI to be a controlled component
                />
                { /* Show validation error */ }
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              { /* Field is invalid if it is touched and validation failed */ }
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  data-testid="email"
                  {...formik.getFieldProps("email")} // make the email component from Chaikra UI to be a controlled component
                />
                { /* Show validation error */ }
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              { /* Field is invalid if it is touched and validation failed */ }
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  data-testid="comment"
                  height={250}
                  {...formik.getFieldProps("comment")} // make the comment component from Chaikra UI to be a controlled component
                />
                { /* Show validation error */ }
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              { /* Show loading indicator on the submit button */}
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
