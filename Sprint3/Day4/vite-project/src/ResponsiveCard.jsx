import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Center, Avatar, Grid, Box } from '@chakra-ui/react';

function ResponsiveCard() {
  return (
    <Box padding="20px" border="1px solid black" marginTop="20px" height="auto" backgroundColor="lightblue">
      <Center>
        <Heading as="h3" size="lg" mb="4">
          Our Clients Speak
        </Heading>
        <Text mb="4">
          Hi, hello, these are the clients.
        </Text>
      </Center>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]} gap="20px">
        <Box>
          <Card align="center" _hover={{ backgroundColor: "black",color:"white",transform: "scale(1.05)", transition: "0.3s" }}>
            <CardHeader>
              <Heading size="md">Efficient Collaborating</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The twilight sky was awash with hues of deep purple and fiery orange, casting long shadows over the serene landscape. A gentle breeze carried the faint scent of blooming jasmine, whispering secrets of the night.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
          <Center>
            <Avatar style={{ marginTop: "15px" }} name="Kola Tioluwani" src="https://bit.ly/dan-abramov" />
          </Center>
          <Center>
            <Text>Dan Abrahmov</Text>
            <Text>CEO of CoFounder</Text>
          </Center>
        </Box>
        <Box>
          <Card align="center" _hover={{ backgroundColor: "black",color:"white",transform: "scale(1.05)", transition: "0.3s" }}>
            <CardHeader>
              <Heading size="md">Responsive Design</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The twilight sky was awash with hues of deep purple and fiery orange, casting long shadows over the serene landscape. A gentle breeze carried the faint scent of blooming jasmine, whispering secrets of the night.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
          <Center>
            <Avatar style={{ marginTop: "15px" }} name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          </Center>
          <Center>
            <Text>Kent Dodds</Text>
            <Text>CEO of CoFounder</Text>
          </Center>
        </Box>
        <Box>
          <Card align="center" _hover={{ backgroundColor: "black",color:"white", transform: "scale(1.05)", transition: "0.3s" }}>
            <CardHeader>
              <Heading size="md">UI/UX Designer</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The twilight sky was awash with hues of deep purple and fiery orange, casting long shadows over the serene landscape. A gentle breeze carried the faint scent of blooming jasmine, whispering secrets of the night.
              </Text>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
          <Center>
            <Avatar style={{ marginTop: "15px" }} name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          </Center>
          <Center>
            <Text>Prosper Otemuyiwa</Text>
            <Text>CEO of CoFounder</Text>
          </Center>
        </Box>
      </Grid>
    </Box>
  );
}

export default ResponsiveCard;
