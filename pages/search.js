import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Flex, Text, Icon} from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import SearchProperty from '../components/SearchProperty'
import Property from '../components/Property'
import noresult from '../assets/images/noresult.svg'
import { fetchApi, baseUrl } from '../utils/fetchApi'

const Search = ({ properties }) => {
  const [searchFilter, setSearchFilter] = useState(false)
  const router = useRouter()
  return (
    <Box>
        <Flex
            cursor='pointer'
            bg='gray.100'
            borderBottom='1px'
            borderColor='gray.200'
            p='2'
            fontWeight='black'
            fontSize='lg'
            justifyContent='center'
            alignItems='center'
            onClick={()=>setSearchFilter(!searchFilter)}
        >
            <Text>Search Property By Filters</Text>
            <Icon  as={BsFilter}  paddingLeft='3' w='7' />
        </Flex>
        {searchFilter && <SearchProperty />}
        <Text fontSize='2xl' p='4' fontWeight='bold'>
            Properties {router.query.purpose}
        </Text>
        <Flex flexWrap='wrap'>
            {properties.map((property)=> <Property key={property.id} property={property} />)}
        </Flex>
        {properties.length === 0 && (
            <Flex justifyContent='center' alignItems='center' marginTop='center' marginBottom='5' flexDirection='column'>
                <Image src={noresult} alt='noresult' />
                <Text fontSize='2xl' marginTop='3'>No Result Found</Text>
            </Flex>
        )}
    </Box>
  )
}

export default Search

export async function getServerSideProps({ query }) {
    const purpose = query?.purpose || 'for-rent';
    const rentFrequency = query?.rentFrequency || 'yearly';
    const minPrice = query?.minPrice || '0';
    const maxPrice = query?.maxPrice || '1000000';
    const roomsMin = query?.roomsMin || '0';
    const bathsMin = query?.bathsMin || '0';
    const sort = query?.sort || 'price-desc';
    const areaMax = query?.areaMax || '35000';
    const locationExternalIDs = query?.locationExternalIDs || '5002';
    const categoryExternalID = query?.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`)
    return {
        props: {
            properties: data?.hits
        }
    }
}