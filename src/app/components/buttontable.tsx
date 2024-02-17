import {Button} from '@chakra-ui/react'


export default function ButtonForm(){
    return(
        <Button  
            mt={'20px'} 
            mb={'20px'}
            width={'200px'} 
            border={'none'}
            boxShadow={'lg'} 
            p={'16px'} 
            fontWeight={700}
            borderRadius={'14px'} 
            cursor={'pointer'}
            bg='#e1142e'
            color='#fff'
            fontSize={'1rem'}
            transition={'0.3s'}
            _hover={{ bg: '#359c00',    transform: 'translateY(-5px)' }}
            >
            Borrar
        </Button>
    );
}