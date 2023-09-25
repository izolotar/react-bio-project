import { Box, Heading, Image, Text, HStack, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image 
        src={imageSrc} 
        alt={title}
      />
      <VStack bg="white" padding="6" data-testid="project" align="left">
        <Heading color='black' size='md'>{title}</Heading>
        <Box padding="4">
          <Text color='black' pt='2' fontSize='sm'>{description}</Text>
        </Box>
        <HStack>
          <Heading color='black' fontSize='sm'>See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color='black'/>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
