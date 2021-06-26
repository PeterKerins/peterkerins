import React from "react";
import Link from "next/link";
import { Heading, Flex, Spacer, Stack } from "@chakra-ui/react";
interface Props {}

const Navigation = (props: Props) => {
  return (
    <Flex maxWidth="6xl" mx="auto" my={2} alignContent="center">
      <Heading>
        <Link href="/">Peter Kerins</Link>
      </Heading>
      <Spacer />
      <Stack direction="row">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Stack>
    </Flex>
  );
};

export { Navigation };
