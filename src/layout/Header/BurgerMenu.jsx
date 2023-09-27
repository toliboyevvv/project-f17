import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Box,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  FaAddressBook,
  FaBed,
  FaChair,
  FaCoins,
  FaCookieBite,
  FaGamepad,
  FaHome,
  FaInfo,
  FaLaptop,
  FaMoneyBill,
  FaNewspaper,
  FaRegBell,
  FaTable,
  FaTv,
} from "react-icons/fa";
import "../../index.css";

function BurgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <>
      <Box
        onClick={onOpen}
        mr={"20px"}
        display={{ base: "inline-block", md: "none" }}
        style={{ cursor: "pointer" }}
      >
        <HamburgerIcon fontSize={"25px"} />
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          color={"var(--third-color)"}
          userSelect={"none"}
          bg={"#F9F9F9"}
          py={"20px"}
        >
          <HStack
            pl={"25px"}
            pr="20px"
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"20px"}
          >
            <Text fontSize={19} fontWeight={500}>
              Меню
            </Text>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              w={30}
              h={30}
              borderRadius={150}
              bg={"#f2f2f2"}
              style={{ cursor: "pointer" }}
              onClick={onClose}
            >
              <CloseIcon color={"#BFBFBF"} fontSize={12} />
            </Box>
          </HStack>

          <NavLink onClick={onClose} to={"/"} className={"nav_link"}>
            <FaHome />
            Главная
          </NavLink>
          <NavLink onClick={onClose} to={"/about"} className={"nav_link"}>
            <FaInfo />O нас
          </NavLink>
          <NavLink onClick={onClose} to={"/contact"} className={"nav_link"}>
            <FaAddressBook />
            Контакты
          </NavLink>

          <Text fontSize={19} fontWeight={500} my={"10px"} ml={"25px"}>
            Категории
          </Text>

          <NavLink onClick={onClose} to={"/kitchen"} className={"nav_link"}>
            <FaCookieBite />
            Кухни
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaBed />
            Спальни
          </NavLink>
          <NavLink onClick={onClose} to={"/livingroom"} className={"nav_link"}>
            <FaTv />
            Гостинные
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaChair />
            Прихожие
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaLaptop />
            Офисная мебель
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaGamepad />
            Детская
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaMoneyBill />
            <Text>Акция</Text>
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaNewspaper />
            Новинки
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaRegBell />
            Матрасы
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaTable />
            Мягкая мебель
          </NavLink>
          <NavLink onClick={onClose} to={"/bedroom"} className={"nav_link"}>
            <FaCoins />
            Шкафы
          </NavLink>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BurgerMenu;
