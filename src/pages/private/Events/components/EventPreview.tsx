import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import cancelIcon from "@iconify/icons-material-symbols/cancel";

import { CustomIcon } from "../../../../components";

const eventDetails = [
  { label: "Device Name", key: "device" },
  { label: "Timing", key: "startTime" },
  { label: "Description", key: "description" },
];

const EventPreview: React.FC<any> = ({ previewItem, handleClosePreview }) => {
  return (
    <Box
      position="absolute"
      top={0}
      right={-800}
      zIndex={2000}
      w="2xl"
      bg="white"
      h="full"
      className="border"
      p={3}
      transition="right 1s"
      {...(previewItem ? { right: 0 } : "")}
    >
      <VStack gap={5}>
        <Flex w="full" alignItems="center" justifyContent="space-between">
          <Text className="font-bold text-lg text-gray-600">Preview</Text>
          <CustomIcon
            icon={cancelIcon}
            color="gray"
            onClick={handleClosePreview}
          />
        </Flex>
        <Box w="full">
          <video controls width="100%" />
        </Box>
        <VStack w="full">
          {eventDetails.map(({ label, key }: any, index: number) => (
            <Flex
              key={`${label}-${index}`}
              w="full"
              justifyContent="flex-start"
              alignItems="center"
              gap={5}
            >
              <Box flex={1} flexGrow={1}>
                <Text className="text-md font-thin text-gray-900">{label}</Text>
              </Box>
              <Box
                flex={1}
                flexGrow={2}
                className="h-10 px-3 p-1 border-2 rounded-md flex items-center"
              >
                <Text className="text-sm text-gray-600">
                  {previewItem?.[key]}
                </Text>
              </Box>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default EventPreview;
