import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Text } from "@chakra-ui/react";
import { Service } from "../Components/Service";
import React from "react";
import Banner from "../Components/Banner";
import { Services } from "Components/Services";
import { ContactForm } from "Components/ContactForm";
import Section from "Components/Section";
export default function Home() {
  return (
    <Box bg="non" fontSize="green">
      <Banner />
      <Section title="Services">
        <Services />
      </Section>
      <Section title="Contact">
        <ContactForm />
      </Section>
    </Box>
  );
}
