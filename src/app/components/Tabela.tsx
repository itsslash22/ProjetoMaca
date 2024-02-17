import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from '@chakra-ui/react';
import ButtonTable from './buttontable';

export default function Tabela() {
  const users = [
    { data: '00/00/2024', peso: '50kg', email: 'john@example.com' },
    { data: '00/00/2024', peso: '55kg', email: 'jane@example.com' },
    { data: '00/00/2024', peso: '70kg', email: 'bob@example.com' },
  ];

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
            {users.map((user) => (
              <Tr key={user.data} color={'#fff'}>
                <Td textAlign={'center'} border="none" bg={''}>{user.data}</Td>
                <Td textAlign={'center'} border="none" bg={''}>{user.peso}</Td>
                <Td textAlign={'center'} border="none" bg={''}><ButtonTable/></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
