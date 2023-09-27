import { useEffect, useState, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { sofaService } from "../service/sofaService";
import { BasketContext } from "../context/BasketContext";

const HotSale = () => {
  const { setProductToStorage } = useContext(BasketContext);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    sofaService.getProduct().then((response) => setProduct(response.products));
  }, []);

  const addToBasket = (item) => {
    setProductToStorage(item);
  };

  return (
    <Box mt={"35px"}>
      <Grid templateColumns={"repeat(4,1fr)"} gap={"20px"}>
        {product.map((item) => {
          return (
            <GridItem
              boxShadow={"0px 3px 5px black"}
              height={"fit-content"}
              key={item.id}
            >
              <Box height={"100%"}>
                <Image
                  src={item.images[0]}
                  width={"100%"}
                  objectFit={"cover"}
                  height={"250px"}
                />
                <VStack p={"10px"} alignItems={"start"}>
                  <Heading className="product-card__title" size={"sm"}>
                    {item.title}
                  </Heading>
                  <Text className="product-card__description">
                    {item.description}
                  </Text>
                  <Text as={"b"}>${item.price?.toLocaleString()}</Text>
                </VStack>
              </Box>
              <Box p={"10px"}>
                <Button
                  w={"100%"}
                  onClick={() => addToBasket(item)}
                  colorScheme="facebook"
                >
                  Добавить в корзину
                </Button>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HotSale;
