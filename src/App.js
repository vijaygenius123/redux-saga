import {Box, Button, Heading, Text, VStack} from "@chakra-ui/react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./store/counter"

function App() {
    const {count} = useSelector(state => state.counter)
    const dispatch = useDispatch()

  return (
   <VStack p={4}>
       <Heading fontSize="6xl">Counter App</Heading>
        <Box>
            <Text fontSize="3xl">Count : {count}</Text>

        </Box>
       <Box>
           <Button margin="2" onClick={() => dispatch(increment())}>+</Button>
           <Button margin="2" onClick={() => dispatch(decrement())}>-</Button>
       </Box>
   </VStack>
  );
}

export default App;
