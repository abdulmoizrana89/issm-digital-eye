import { useState } from "react";
import { Box, Divider, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { MainSection as LayoutMainSection } from "../../../layout";
import { SearchField } from "../../../components";
import DeviceListingCard from "./components/DeviceListingCard";
import AddDeviceModal from "../Home/components/AddDeviceModal";

const data = [
  {
    id: "1",
    thumbnail: "",
    name: "Meeting 1",
    ip: "192.168.10.28",
  },
  {
    id: "2",
    thumbnail: "",
    name: "Meeting 2",
    ip: "192.168.10.28",
  },
  {
    id: "3",
    thumbnail: "",
    name: "Meeting 3",
    ip: "192.168.10.28",
  },
  {
    id: "4",
    thumbnail: "",
    name: "Meeting 1",
    ip: "192.168.10.28",
  },
  {
    id: "5",
    thumbnail: "",
    name: "Meeting 1",
    ip: "192.168.10.28",
  },
];

const MainSection = ({ item }: { item: string | null | any }) => {
  const [editItemId, setEditItemId] = useState(null);
  const [searchTerm, onSearchTermChange] = useState<string>("");
  const title = item?.label || "";

  return (
    <LayoutMainSection>
      <VStack alignItems="flex-start" gap={4}>
        <Text className="text-2xl font-bold text-[#4F5D75] pb-5 font-Inter capitalize">
          Device Listing
        </Text>
        <Box w="full">
          <Text>{title}</Text>
          <Divider />
        </Box>
        <SearchField
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
        />
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={4} mt={2}>
          {data.map((device, index) => (
            <DeviceListingCard
              key={`device-lisi-card-${index}`}
              {...device}
              handleEdit={setEditItemId}
            />
          ))}
        </SimpleGrid>
      </VStack>
      {/* Todo: write a wrapper to fetch device data and handle edit behavior */}
      {!!editItemId ? (
        <AddDeviceModal
          mode="edit"
          isOpen={true}
          onClose={() => setEditItemId(null)}
        />
      ) : null}
    </LayoutMainSection>
  );
};

export default MainSection;
