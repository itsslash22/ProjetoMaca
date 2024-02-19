'use client';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, HStack } from '@chakra-ui/react';
import ButtonTable from './buttontable';
import { useHistoricStore } from '../hooks/form.store';

export default function Tabela() {
  const { historic } = useHistoricStore();

  return (
    <HStack justifyContent="center" alignItems="center" bg="#01262e" >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr color="#fff" m={'5px'}>
              <Th border="none" py="20px" px={'15px'} bg={'#359c00'}>Fecho</Th>
              <Th border="none" py="20px" px={'15px'} bg={'#359c00'}>Peso</Th>
              <Th border="none" py="20px" px={'15px'} bg={'#359c00'}>Comportamiento</Th>
            </Tr>
          </Thead>
          <Tbody>
            {historic?.map((user) => (
              <Tr key={user.date} color={'#fff'}>
                <Td textAlign={'center'} border="none" bg={''}>{user.date}</Td>
                <Td textAlign={'center'} border="none" bg={''}>{user.weight}</Td>
                <Td textAlign={'center'} border="none" bg={''}><ButtonTable id={user.id}/></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </HStack>
  );
}
