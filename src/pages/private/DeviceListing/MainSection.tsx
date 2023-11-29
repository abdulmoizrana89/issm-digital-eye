import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { MainSection as LayoutMainSection } from "../../../layout";
import {
  CustomBtn,
  CustomCard,
  CustomIconButton,
  SearchField,
} from "../../../components";
import Thumbnail from "../../../assets/images/OfficeThumbnail.svg";
import { OfficeCardInfo } from "../Home/components/OfficeCard";

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

const DeviceListingCard: React.FC<any> = ({ id, name, ip: address }) => {
  const navigate = useNavigate();
  return (
    <CustomCard
      cardMedia={
        <Image
          src={Thumbnail}
          alt="office thumbnail"
          objectFit="cover"
          w="full"
          height={200}
        />
      }
      content={
        <Box mt={2}>
          <Flex justifyContent="space-between">
            <OfficeCardInfo {...{ name, address }} />
            <CustomIconButton
              icon="iconamoon:edit-light"
              onClick={() => {
                console.log("id=> ", id);
                // navigate(`/home/${id}`);
              }}
            />
          </Flex>
        </Box>
      }
      footer={
        <Flex wrap="wrap" gap={2}>
          <CustomBtn
            bgColor="#FFF"
            width="full"
            color="#696969"
            borderColor="#D7D7D7"
            textColor="#696969"
            title="Live Video"
            onClick={() => navigate(`/device-listing/live/${id}`)}
          />
          <CustomBtn
            bgColor="#FFF"
            width="full"
            color="#696969"
            borderColor="#D7D7D7"
            textColor="#696969"
            title="Event Recordings"
            onClick={() => navigate(`/events/${id}`)}
          />
        </Flex>
      }
    />
  );
};
