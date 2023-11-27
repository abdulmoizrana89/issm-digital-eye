import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { MainSection } from "../../../layout";
import { SearchField } from "../../../components";
import EventRecordingsTable from "./components/EventRecordingTable";

const Events = () => {
  const [searchTerm, onSearchTermChange] = useState<string>("");
  const {
    isOpen: isFilterOpen,
    onClose: onFilterClose,
    onOpen: onFilterOpen,
  } = useDisclosure();
  const {
    isOpen: isSettingOpen,
    onClose: onSettingClose,
    onOpen: onSettingOpen,
  } = useDisclosure();

  return (
    <MainSection>
      <VStack w="full" gap={2}>
        <Box w="full">
          <Text className="text-3xl font-Inter capitalize">
            Event Recordings
          </Text>
        </Box>
        <Flex w="full" gap={2}>
          <SearchField
            searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange}
          />
          <Button
            variant="outline"
            border="1px"
            borderColor="gray"
            borderRadius={5}
            w="20%"
            fontSize={14}
            fontWeight="normal"
            color="gray"
            onClick={onFilterOpen}
          >
            Filter
          </Button>
          <Button
            variant="outline"
            border="1px"
            borderColor="gray"
            borderRadius={5}
            w="20%"
            fontSize={14}
            fontWeight="normal"
            color="gray"
            onClick={onSettingOpen}
          >
            Setting
          </Button>
        </Flex>
        <Box w="full" mt={2}>
          <EventRecordingsTable
            // data={[]}
            columns={[]}
            onRowSelect={() => {}}
          />
        </Box>
      </VStack>
    </MainSection>
  );
};

export default Events;
