import { Box, Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import { MainSection } from "../../../layout";
import Analytics from "./Analytics";

const Live = () => {
  return (
    <MainSection>
      <Text className="text-3xl font-Inter capitalize">Live Video</Text>
      <Grid templateColumns="7fr 5fr" columnGap={4} mt={5}>
        <GridItem>
          <Box border="1px" borderColor="gray.100" w="full" p={4}>
            <Flex justifyContent="space-between">
              <Text className="text-[#13465B]">VIDEO FEED</Text>
              <Text>Live Feed</Text>
            </Flex>
            <Box mt={2}>
              <video width="100%" height="100px" controls />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Box w="full">
            <Analytics />
          </Box>
        </GridItem>
      </Grid>
    </MainSection>
  );
};

export default Live;
