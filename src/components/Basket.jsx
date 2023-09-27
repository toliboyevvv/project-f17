import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Basket = () => {
  const { basket } = useContext(BasketContext);
  console.log(basket);
  return (
    <Box>
      <VStack>
        {basket.map((item, index) => (
          <Box key={index} borderBottom={"1px solid gray"}>
            <Image src={item.images[0]} width={"300px"} />
            <Heading>{item.title}</Heading>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Basket;
