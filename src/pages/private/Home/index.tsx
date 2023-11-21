import {
  Text,
  SimpleGrid,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

import MainSection from "../../../layout/MainSection";
import SearchField from "../../../components/SearchField";
import { useState } from "react";

function Home() {
  const { onOpen } = useDisclosure();
  const [searchTerm, onSearchTermChange] = useState<string>("");

  return (
    <MainSection>
      <SimpleGrid gap={5}>
        <Text className=" text-3xl font-Inter capitalize">Home</Text>
        <Flex gap={2}>
          <SearchField
            searchTerm={searchTerm}
            onSearchTermChange={onSearchTermChange}
          />
          <Button
            bgGradient="linear(161deg, #FF5574, #EF5350)"
            borderRadius={5}
            w="20%"
            fontSize={14}
            fontWeight="normal"
            color="#FFFFFF"
            onClick={onOpen}
          >
            Create Office
          </Button>
        </Flex>
      </SimpleGrid>
    </MainSection>
  );
}

export default Home;
