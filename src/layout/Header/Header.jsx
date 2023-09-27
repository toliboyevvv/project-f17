import { Box, Container, HStack, Image, Text, Tooltip } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { Basket } from "@styled-icons/ionicons-sharp/Basket";
import { User } from "@styled-icons/boxicons-regular/User";
import BurgerMenu from "./BurgerMenu";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);
  return (
    <Container
      display={"flex"}
      gap={"40px"}
      alignItems={"center"}
      maxW={"1300px"}
      p={"20px"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <BurgerMenu />
        <Box>
          <Link to={"/"}>
            <Image src={logo} height={25} minW={"112px"} />
          </Link>
        </Box>
      </Box>
      <Box width={"100%"} display={{ base: "none", sm: "block" }}>
        <Filter />
      </Box>
      <HStack spacing={"20px"}>
        <Link to="/like">
          <Tooltip label="wish-list" hasArrow>
            <Heart width={20} height={20} />
          </Tooltip>
        </Link>
        <Link to="/basket" style={{ position: "relative" }}>
          <Text
            width={"25px"}
            height={"25px"}
            position={"absolute"}
            top={"-20px"}
            left={"10px"}
            background={"red"}
            color={"#fff"}
            textAlign={"center"}
            borderRadius={100}
          >
            {basket.length}
          </Text>
          <Tooltip label="basket" hasArrow>
            <Basket width={25} height={25} position={""} />
          </Tooltip>
        </Link>
        <Link to="/user-profile">
          <Tooltip label="profile" hasArrow>
            <User width={25} height={25} />
          </Tooltip>
        </Link>
      </HStack>
    </Container>
  );
};

export default Header;
