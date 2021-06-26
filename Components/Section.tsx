import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <Box as="section" marginBlockEnd={1}>
      <Heading>{title}</Heading>
      {children}
    </Box>
  );
};

export default Section;
