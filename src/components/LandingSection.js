import React from "react";
import { Text, Heading, VStack , Avatar, Center, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="landing-section"
  >
  <VStack
    spacing={4}
    align='stretch'
  >
    <Center>
      <Avatar src="https://i.pravatar.cc/150?img=7" alt="drawing" size="2x1" data-testid="avatar" />
    </Center>
    <Center>
      <Text fontSize="lg" >{greeting}</Text>
    </Center>
    <Center>
      <Heading fontSize='3xl'>{bio1}</Heading>
    </Center>
    <Center>
      <Heading fontSize='3xl'>{bio2}</Heading>
    </Center>
  </VStack>

  </FullScreenSection>
);

export default LandingSection;
