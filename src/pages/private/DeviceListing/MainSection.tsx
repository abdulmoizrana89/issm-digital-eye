import { useState } from "react";
import { Box, Divider, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { MainSection as LayoutMainSection } from "../../../layout";
import { SearchField } from "../../../components";
import DeviceListingCard from "./components/DeviceListingCard";

const data = [
  {
    id: "1",
    thumbnail: "",
    name: "eeting 1",
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
  const [searchTerm, onSearchTermChange] = useState<string>("");
  const title = item?.label || "";

  return (
    <LayoutMainSection>
      <VStack alignItems="flex-start" gap={4}>
        <Text className="text-3xl font-Inter capitalize">Device Listing</Text>
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
            <DeviceListingCard key={`device-lisi-card-${index}`} {...device} />
          ))}
        </SimpleGrid>
      </VStack>
    </LayoutMainSection>
  );
};

export default MainSection;
