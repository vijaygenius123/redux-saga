import {Box, Button, Heading, Text, VStack} from "@chakra-ui/react";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./store/counter"
import {useEffect} from "react";
import {getUser} from "./store/user";

function App() {
    const {count} = useSelector(state => state.counter)
    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getUser())
    },[dispatch])

    console.log(user)

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
       <Box>
           <Text fontSize="3xl">User : {user && user.name}</Text>
       </Box>
       <Box>
           <Button margin="2" onClick={() => dispatch(getUser())}>Get User</Button>
       </Box>
   </VStack>
  );
}

export default App;
