import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import { MainSection } from "../../../layout";
import { SearchField, CustomIcon } from "../../../components";
import EventRecordingsTable from "./components/EventRecordingTable";
import EventPreview from "./components/EventPreview";
import searchIcon from "@iconify/icons-carbon/search";

const Events = () => {
  const [searchTerm, onSearchTermChange] = useState<string>("");
  const [previewItem, setPreviewItem] = useState(null);
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

  const handleClosePreview = () => {
    setPreviewItem(null);
  };

  const onViewPreview = (e: any, row: any) => {
    e.stopPropagation();
    setPreviewItem(row);
  };

  return (
    <MainSection>
      <VStack w="full" gap={5}>
        <Box w="full">
          <Text className="text-3xl text-[#4F5D75] font-Inter capitalize">
            Event Recordings
          </Text>
        </Box>
        <Box w="full" position="relative" overflowX="hidden">
          <Flex w="full" gap={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<CustomIcon icon={searchIcon} />}
              />
              <Input
                type="text"
                placeholder="Search"
                className="rounded-[3px]"
              />
            </InputGroup>
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
              onViewPreview={onViewPreview}
            />
          </Box>
          <EventPreview
            previewItem={previewItem}
            handleClosePreview={handleClosePreview}
          />
        </Box>
      </VStack>
    </MainSection>
  );
};

export default Events;
