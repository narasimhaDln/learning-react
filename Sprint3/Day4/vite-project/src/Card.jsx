import React from 'react';
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, ButtonGroup, Button, Center, Box } from '@chakra-ui/react';

function CardDisplay() {
  return (
    <div>
      <Center>
        <Card maxW="sm" boxShadow="xl" borderRadius="md" _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
          <CardBody>
            <Center>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" textAlign="center">Living Room Sofa</Heading>
              <Text textAlign="center">hello@143Gmail.com</Text>
              <Text textAlign="center">
                This sofa is perfect for modern tropical spaces, baroque inspired spaces.
              </Text>
              <Text textAlign="center">or</Text>
              <Text textAlign="center"><span style={{color:"blue"}}>#tag</span>
              <br></br>
              <span>me in your posts</span>
              </Text>
              <Center>
                <ButtonGroup variant="outline" spacing="6">
                  <Button colorScheme="blue">#ART</Button>
                  <Button>#PHOTOGRAPHY</Button>
                  <Button>#MUSIC</Button>
                </ButtonGroup>
              </Center>
              <Center>
                <ButtonGroup spacing="5" size="lg" borderRadius="full">
                  <Button variant="solid" colorScheme="blue">
                    Message
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Follow
                  </Button>
                </ButtonGroup>
              </Center>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
}

export default CardDisplay;
