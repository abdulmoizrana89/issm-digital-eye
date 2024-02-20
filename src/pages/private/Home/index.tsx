import { Suspense, lazy, useState } from "react";
import {
  Text,
  SimpleGrid,
  Button,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

import MainSection from "../../../layout/MainSection";
import SearchField from "../../../components/SearchField";
import { data } from "./office-data";
import OfficeCard from "./components/OfficeCard";

const CreateOfficeModal = lazy(() => import("./components/CreateOfficeModal"));

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, onSearchTermChange] = useState<string>("");

  return (
    <MainSection>
      <Text className="text-2xl font-bold text-[#4F5D75] pb-5 font-Inter capitalize">
        Home
      </Text>
      <Flex gap={2} paddingBottom={5}>
        <SearchField
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
        />
        <Button
          bgGradient="linear(161deg, #FF5574, #EF5350)"
          borderRadius={5}
          w="10%"
          fontSize={14}
          fontWeight="normal"
          color="#FFFFFF"
          onClick={onOpen}
        >
          Create Office
        </Button>
      </Flex>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={4} mt={2}>
        {data.map((office, index) => (
          <OfficeCard key={`office-card-${index}`} {...office} />
        ))}
      </SimpleGrid>
      {!!isOpen ? (
        <Suspense fallback={<>...</>}>
          <CreateOfficeModal isOpen={isOpen} onClose={onClose} />
        </Suspense>
      ) : null}
    </MainSection>
  );
}

export default Home;
