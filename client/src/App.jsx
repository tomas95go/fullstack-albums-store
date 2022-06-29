import { useState } from "react";
import { Link, Box, Container, HStack, Center } from "@chakra-ui/react";
import { Outlet, Link as ReactRouterLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box bg="#2E0249" h="100vh" color="white">
      <Container maxW="container.xl">
        <Center>
          <HStack as="nav">
            <Link as={ReactRouterLink} to="/albums/form">
              Album Form
            </Link>
            <Link as={ReactRouterLink} to="/albums/active">
              Active Albums
            </Link>
            <Link as={ReactRouterLink} to="/albums/inactive">
              Inactive Albums
            </Link>
          </HStack>
        </Center>
        <Center>
          <Outlet />
        </Center>
      </Container>
    </Box>
  );
}

export default App;
