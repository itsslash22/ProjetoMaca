'use client';
import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    Text,
  } from '@chakra-ui/react';
  import ButtonForm from './buttonform';
  import { SubmitHandler, useForm } from 'react-hook-form'

 export interface Fields {
    date: string
    weight: number
 }

  export default function Form() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<Fields>()

    const onSubmit: SubmitHandler<Fields> = async (data) => {
      console.log(data)
      // reset()
    }  

    return (
    <>
        <Flex 
          align="center" 
          justify="center" 
          color="#4A90E2" 
          textColor="#fff" 
          bg="#e1142e"
          pt="2rem"
          pb="1.5rem"
        >
            <Text fontSize={'20px'} fontWeight={700}>
            Monitoreo Diario de Peso
            </Text>
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl 
            display="flex" 
            p={{ base: '1rem', md: '1.5rem' }} // Corrigido para o formato de objeto
            alignItems="center" 
            justifyContent="center" 
            flexDirection="column" 
            bg="#01262e"
          >
            <FormLabel 
              fontSize="1.2rem" 
              fontWeight={700} 
              p="1rem"
              color='#fff'
            >
              Fecha:
            </FormLabel>
            <Input 
              defaultValue="test" {...register("date")}
              type="date" 
              w={['90%', '80%', '500px']} // Exemplo de responsividade com porcentagem e valor fixo
              p="16px" 
              borderRadius="14px"
              border="none"
              required
              fontSize="1rem"
            />

            <FormLabel 
              fontSize="1.2rem" 
              fontWeight={700} 
              p="1rem"
              color='#fff'
            >
              Peso(kg):
            </FormLabel>
            <FormControl>
              <Input
                {...register("weight")}
                type="number"
                w={['90%', '80%', '500px']}
                p="16px"
                borderRadius="14px"
                border="none"
                required
                fontSize="1rem"            
              />
            </FormControl>
            <ButtonForm/>
          </FormControl>
          <Flex 
              align="center" 
              justify="center" 
              color="#4A90E2" 
              textColor="#fff" 
              bg="#e1142e"
              pt="2rem"
              pb="1.5rem"
              w={'100'}>              
          </Flex>
        </form>
        </>
    );
}
  