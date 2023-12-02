import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { CustomCard, CustomIconButton } from "../../../../components";
import { OfficeCardInfo } from "../../Home/components/OfficeCard";
import Thumbnail from "../../../../assets/images/OfficeThumbnail.svg";

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
        <Flex justifyContent="center" w="full" wrap="wrap" gap={2}>
          <Button
            color="#696969"
            borderColor="#D7D7D7"
            variant="outline"
            bg="white"
            fontSize="sm"
            flexGrow={1}
            flexBasis="80px"
            flexShrink={2}
            onClick={() => navigate(`/device-listing/live/${id}`)}
          >
            Live Video
          </Button>
          <Button
            flexGrow={1}
            flexBasis="130px"
            flexShrink={1}
            color="#696969"
            borderColor="#D7D7D7"
            variant="outline"
            bg="white"
            fontSize="sm"
            onClick={() => navigate(`/events/${id}`)}
          >
            Event Recordings
          </Button>
        </Flex>
      }
    />
  );
};

export default DeviceListingCard;
