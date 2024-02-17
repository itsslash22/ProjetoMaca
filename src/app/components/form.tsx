import {
    FormControl,
    FormLabel,
    Input,
    Flex,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Text
  } from '@chakra-ui/react';
  import ButtonForm from './buttonform';
import { SubmitHandler, useForm } from 'react-hook-form';

  type Inputs = {
    weight: any
    date: string
  }
  
  export default function Form() {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<any> = (data) => console.log(data)
  
    console.log(watch("weight")) // watch input value by passing the name of it


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
            <input 
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
              <input 
                defaultValue="test" {...register("weight")}
                min={1} 
                max={200}
              >
                <NumberInputField 
                  width={['90%', '80%', '500px']} // Aplicando responsividade semelhante ao Input de data
                  p="16px" 
                  borderRadius="14px" 
                  cursor="text" 
                  border="none"
                  fontSize="1rem"
                />
                <NumberInputStepper pr="16px">
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </input>
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
              <Text fontSize={'20px'} fontWeight={700}>
                  Registro de Peso
              </Text>
          </Flex>

          <button type="submit"> Enviar </button>

        </form>
        </>
    );
}
  