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
import { useHistoricStore } from '../hooks/form.store';
import { v4 as uuidv4 } from 'uuid';

 export interface Fields {
    id: string
    date: string
    weight: number
 }

  export default function Form() {
    const { setHistoric } = useHistoricStore()
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<Fields>()

    const onSubmit: SubmitHandler<Fields> = async (data: Fields) => {
      data.id = uuidv4()
      setHistoric(data)
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
                w={'300px'}
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
        >
          <Text fontSize={'20px'} fontWeight={700}>
            Registro de Peso
          </Text>
        </Flex>
        </form>
        </>
    );
}
  