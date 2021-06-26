import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import profilePic from "../public/me.jpg";
interface Props {}

const About = (props: Props) => {
  return (
    <Flex wrap="wrap-reverse" gridGap="2em" alignItems="center">
      <Box flexGrow={1} flexBasis={500} gridGap="2em" alignItems="center">
        <Heading>Peter Kerins</Heading>
        <Heading>Cork based web developer.</Heading>
        <Text>
          Graduated from MSc Interactive Media in 2015. Since then I spent a few
          years working in Munich for a Werbeagentur as a developer. During my
          time there I worked for a variety of clients in a wide range of
          fields. Since my return to Cork I have been working as a freelance
          developer and creative consultant, collaborating with artists,
          collectives, and marketing agencies. In Munich I fell in love with
          good design. It gives me joy to take inspiration from: architecture,
          print, art, music, fashion, and everyday life to create beautiful and
          accessible web products for those I work with.
        </Text>

        <Text>
          If you're in need of my services, feel free to contact me for a
          consultation.
        </Text>
      </Box>
      <Box flexGrow={1} flexBasis={500} borderRadius="2xl" overflow="hidden">
        <Image src={profilePic} placeholder="blur" alt="Peter Kerins" />
      </Box>
    </Flex>
  );
};
export default About;
