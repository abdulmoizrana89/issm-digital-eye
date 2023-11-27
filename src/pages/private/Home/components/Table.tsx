import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

type dataType = {
  id: string;
  deviceName: string;
  ip: string;
  streamURL: string;
};

type TableProps = {
  data: dataType[];
};

const TableComponent: React.FC<TableProps> = ({ data }) => {
  const handleViewLiveStream = (data: dataType) => {};

  return (
    <Box overflowY="scroll" maxH="50vh" width="100%">
      <Table className="fixedHeader" variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>S.NO</Th>
            <Th>Device Listing</Th>
            <Th>IP Address</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              <Td>{row.id}</Td>
              <Td>{row.deviceName}</Td>
              <Td>{row.ip}</Td>
              <Td
                textDecor="underline"
                cursor="pointer"
                onClick={() => handleViewLiveStream(row)}
              >
                View Live Video
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
