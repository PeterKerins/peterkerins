import { Box, Heading } from "@chakra-ui/layout";
import { services } from "data/services";
import { Service } from "./Service";

interface Props {}

export const Services = (props: Props) => {
  return (
    <Box>
      {services.map((service) => (
        <Service key={service.title} service={service} />
      ))}
    </Box>
  );
};
