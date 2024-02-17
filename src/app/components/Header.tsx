import { Image,Flex } from '@chakra-ui/react'

export default function Header(){
    return(
        <Flex w={'100%'} bg={'#c8e9e0'} height={'120px'} justifyContent={['center']} >
            <Image src='/Manzana.png'/>
        </Flex>
    );
}