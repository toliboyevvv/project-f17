import {
  Box,
  Button,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { menu } from './../../utils/Menu'
import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const TabMenu = () => {
  const [slicedMenu, setSlicedMenu] = useState(6)
  const activeStyle = ({ isActive }) => {
    return isActive ? { color: '#38B2AC' } : {}
  }

  return (
    <Box
      width={'100%'}
      display={'flex'}
      alignItems={'center'}
      p={'20px'}
      justifyContent={'space-between'}
      borderRadius={'5px'}
      gap={'20px'}
      flexWrap={'wrap'}
      boxShadow={' 0px 2px 4px 0px rgba(0, 0, 0, 0.07)'}
    >
      {menu.slice(0, slicedMenu).map((item) => {
        return (
          <ChakraLink
            to={item.path}
            key={item.id}
            as={NavLink}
            display={'flex'}
            alignItems={'center'}
            gap={'10px'}
            _hover={{ textDecoration: 'none' }}
            flexGrow={1}
            justifyContent={'center'}
            height={'100%'}
            style={activeStyle}
          >
            <Text as={'span'}>{item.Icon}</Text>
            <Text as={'span'}>{item.title}</Text>
          </ChakraLink>
        )
      })}
      <Menu>
        <MenuButton>
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {menu.slice(slicedMenu).map((item) => {
            return (
              <MenuItem key={item.id} gap={'10px'}>
                <Text as={'span'}>{item.Icon}</Text>

                <Text as={'span'}>{item.title}</Text>
              </MenuItem>
            )
          })}
          {/* <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem> */}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default TabMenu
