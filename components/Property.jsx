import Link from 'next/link'
import Image from 'next/image'

import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons//bs'
import { GoVerified } from 'react-icons/go'
import { ImLocation } from 'react-icons/im'
import millify from 'millify'

import defaultImage from '../assets/images/defaultHouse.jpg'


const Property = ({property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, location  }})=>(
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap='wrap' width='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt='house' width={400} height={200} />
            </Box>
            <Box w='full'>
                <Flex paddingTop={2} justifyContent='space-between' alignItems='center' >
                    <Flex alignItems='center'>
                        <Box paddingRight={3} color='green.400'>{isVerified && <GoVerified />}</Box>
                        <Text fontWeight='bold' fontSize='lg'>AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box> 
                        <Avatar size='sm' src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex justifyContent='space-between' p={1} alignItems='center' w='350px' color='blue.400'>
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill /> | <ImLocation /> {location[1]?.name && `${location[1]?.name}`}
                </Flex>

                <Text fontSize='lg'>
                    {title.length > 30 ? `${title.substring(0, 30)}...` : {title}}
                </Text>
            </Box>
        </Flex>
    </Link>
)

export default Property