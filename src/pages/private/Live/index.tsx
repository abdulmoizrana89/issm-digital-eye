import { Box, Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import { MainSection } from "../../../layout";
import Analytics from "./Analytics";
import { CEMENT_BAGS } from "/src/assets/index";

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
              <video
                key={CEMENT_BAGS}
                width="100%"
                height="100px"
                autoPlay
                loop
                muted
              >
                <source src={CEMENT_BAGS} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
