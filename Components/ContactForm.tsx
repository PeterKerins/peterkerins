import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
interface Props {}

export const ContactForm = (props: Props) => {
  return (
    <Box>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="What's on your mind?" />
      </FormControl>
      <Button mt={4} bgColor="brand" color="white" type="submit">
        Submit
      </Button>
    </Box>
  );
};
