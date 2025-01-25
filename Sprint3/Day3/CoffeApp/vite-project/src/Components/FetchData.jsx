import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee} from "./redux/action";

import {Grid, Card,Image,Heading,Stack,ButtonGroup,Button,Text,Divider, CardBody, CardFooter } from '@chakra-ui/react'

function FetchData() {
  const dispatch = useDispatch();
  const { loading, coffeeData, error } = useSelector((state) => state.coffee);

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {coffeeData.map((item)=>(
              <Card key={item.id} maxW='sm'>
  <CardBody>
    <Image
      src={item.image}
      alt="itemImage"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{item.titile}</Heading>
      <Text>
       {item.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      {item.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
          
        ))}
      </Grid>
    </div>

  
 
  );
}

export default FetchData;
