'use client';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from '@chakra-ui/react';
import ButtonTable from './buttontable';
import { useHistoricStore } from '../hooks/form.store';

export default function Tabela() {
  const { historic } = useHistoricStore();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" bg="#01262e" >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr color="#fff">
              <Th border="none" py="20px" px='120px' bg={'#359c00'}>Fecho</Th>
              <Th border="none" py="20px" px='120px' bg={'#359c00'}>Peso</Th>
              <Th border="none" py="20px" px='120px' bg={'#359c00'}>Comportamiento</Th>
            </Tr>
          </Thead>
          <Tbody>
            {historic?.map((user) => (
              <Tr key={user.date} color={'#fff'}>
                <Td textAlign={'center'} border="none" bg={''}>{user.date}</Td>
                <Td textAlign={'center'} border="none" bg={''}>{user.weight}</Td>
                <Td textAlign={'center'} border="none" bg={''}><ButtonTable/></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
