import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box
      height="60vh"
      width="100vw"
      position="relative"
      left="50%"
      right="50%"
      marginInline="-50vw"
      bgColor="#339999"
      mt="-1"
      mb="1"
    >
      <Box
        maxW="4xl"
        margin="0 auto"
        height="100%"
        d="flex"
        alignItems="center"
        p="1"
        color="white"
      >
        <Heading>
          Cork Based Web Developer, specialising in: web development, ecommerce,
          graphic design, branding &amp; logo design, and the JAMstack
        </Heading>
      </Box>
    </Box>
  );
};

export default Banner;
