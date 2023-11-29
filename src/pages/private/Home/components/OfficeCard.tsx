import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import {
  CustomBtn,
  CustomCard,
  CustomIconButton,
} from "../../../../components";
import Thumbnail from "../../../../assets/images/OfficeThumbnail.svg";

interface IOficeCardInfoProps {
  name: string;
  address?: string;
  categories?: number;
  subCategories?: number;
}
interface IOfficeCardProps extends IOficeCardInfoProps {
  id: string;
}

export const OfficeCardInfo = ({
  name,
  address,
  categories,
  subCategories,
}: IOficeCardInfoProps) => (
  <Box>
    <Text>{name}</Text>
    {address ? <Text>Location: {address}</Text> : null}

    <Box mt={2}>
      {categories ? <Text>Categories: {categories}</Text> : null}
      {subCategories ? <Text>Sub-Categories: {subCategories}</Text> : null}
    </Box>
  </Box>
);

export const OfficeCard = ({
  id,
  // thumbnail,
  name,
  address,
  categories,
  subCategories,
}: IOfficeCardProps) => {
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
            <OfficeCardInfo {...{ name, address, categories, subCategories }} />
            <CustomIconButton
              icon="iconamoon:edit-light"
              onClick={() => {
                console.log("id=> ", id);
                navigate(`/home/${id}`);
              }}
            />
          </Flex>
        </Box>
      }
      footer={
        <CustomBtn
          bgColor="#FFF"
          width="full"
          color="#696969"
          borderColor="#D7D7D7"
          textColor="#696969"
          title="View Categories"
          onClick={() => {
            navigate(`/home/office/${id}`);
          }}
        />
      }
    />
  );
};

export default OfficeCard;
