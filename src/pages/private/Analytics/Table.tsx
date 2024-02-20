import React, { useEffect, useRef } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import "./TableComponent.css"; // Importing CSS for highlighting

interface DataType {
  objectDetected: string;
  objectCount: number;
  timestamp: string;
}

interface TableProps {
  data: DataType[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  const lastRowRef = useRef<HTMLTableRowElement | null>(null);

  useEffect(() => {
    // If the lastRowRef is defined, scroll into view
    lastRowRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <Box overflowY="scroll" height="50vh" width="100%">
      <Table className="fixedHeader" variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>Objects Detected</Th>
            <Th>Object COUNT</Th>
            <Th>Timestamp</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr
              key={index}
              className={index === data.length - 1 ? "highlight" : ""}
              ref={index === data.length - 1 ? lastRowRef : null}
            >
              <Td className="text-sm">{row.objectDetected}</Td>
              <Td className="text-sm">{row.objectCount}</Td>
              <Td className="text-sm">{row.timestamp}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableComponent;
