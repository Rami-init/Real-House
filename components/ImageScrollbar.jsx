import { useContext } from 'react';
import Image from 'next/image';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = ()=>{
    const { scrollPrev } = useContext(VisibilityContext)
    return(
        <Flex justifyContent='center' alignItems='center' marginRight='1' >
            <Icon 
                as={FaArrowAltCircleLeft}
                onClick={()=>scrollPrev}
                cursor='pointer'
                fontSize='2xl'
                d={['none','none','none','block']}
            ></Icon>
        </Flex>
    )
}
const RightArrow = ()=>{
    const { scrollNext } = useContext(VisibilityContext)
    return(
        <Flex justifyContent='center' alignItems='center' marginLeft='1' >
            <Icon 
                as={FaArrowAltCircleRight}
                onClick={()=>scrollNext}
                cursor='pointer'
                fontSize='2xl'
                d={['none','none','none','block']}
            ></Icon>
        </Flex>
    )
}

const ImageScrollbar = ({data})=>{
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
            {data?.map((item)=>(
                <Box width='910px' padding='1' itemId={item.id} overflow='hidden' key={item.id}>
                    <Image 
                        src={item.url} 
                        placeholder='blur' 
                        alt='property' 
                        width={1000} 
                        height={500} 
                        blurDataURL={item.url}
                        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
                        />
                </Box>
            ))}
        </ScrollMenu>
    )
}
export default ImageScrollbar