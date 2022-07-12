import Link from 'next/link'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => {
  return (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box  fontSize='3xl' fontWeight='bold' color='blue.400'>
            <Link paddingLeft={2} href='/'>Real House</Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} variant='outlined' color='red.400' icon={<FcMenu />}></MenuButton>
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search?prurpose=for-rent' passHref>
                        <MenuItem icon={<FcAbout />}>Rent Property</MenuItem>
                    </Link>
                    <Link href='/search?prurpose=for-sale' passHref>
                        <MenuItem icon={<FiKey />}>Sale Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
  )
}

export default Navbar