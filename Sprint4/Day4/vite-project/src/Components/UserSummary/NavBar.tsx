import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const NavBar: React.FC = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex maxW="lg" mx="auto" justify="space-between">
        <Button as={Link} to="/FeedBackForm" colorScheme="teal" variant="ghost">
          FeedBack Form
        </Button>
        <Button as={Link} to="/FormSummary" colorScheme="teal" variant="ghost">
          Summary
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
