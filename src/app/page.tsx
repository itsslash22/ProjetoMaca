import Header from './components/Header';
import Form from './components/form'
import Tabela from './components/Tabela'
import '@/app/styles/global.css'


import { ChakraProvider } from '@chakra-ui/react';
export default function Home() {
  return (
    <>   
      <Header/>
      <Form/>
      <Tabela/>
    </>
    
  );
}
