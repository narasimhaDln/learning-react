import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee, setSortOrder } from "./redux/action";
import { Button, Stack } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react'

function SideBar() {
  const dispatch = useDispatch();
  // const sortOrder = useSelector((state) => state.coffee.sortOrder);

  const handleSortOrderChange = (order) => {
    dispatch(setSortOrder(order));
    dispatch(fetchCoffee(order)); 
  };

  return (
    <div>
       <Center bg='tomato' h='100px' color='white'>
      <b>Coffee Menu</b>
      </Center>
      <Stack direction="row" spacing={4}>
        <Button onClick={() => handleSortOrderChange("asc")} colorScheme="teal" variant="solid">
          Sort Asc
        </Button>
        <Button onClick={() => handleSortOrderChange("desc")} colorScheme="teal" variant="outline">
          Sort Desc
        </Button>
      </Stack>
    </div>
  );
}

export default SideBar;
