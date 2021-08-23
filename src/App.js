import {Box, Heading, Text, VStack} from "@chakra-ui/react";
import {useSelector} from "react-redux";

function App() {
    const {count} = useSelector(state => state.counter)
  return (
   <VStack p={4}>
       <Heading fontSize="6xl">Counter App</Heading>
        <Box>
            <Text fontSize="3xl">Count : {count}</Text>
        </Box>
   </VStack>
  );
}

export default App;
