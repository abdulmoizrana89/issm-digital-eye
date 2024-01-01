import { Flex, Text, VStack, Box } from "@chakra-ui/react";
import lineIcon from "@iconify/icons-pepicons-pencil/line-x";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../components/ui/popover";
import { CustomIcon } from "../../../../../components";

const EventPopoverNotification: React.FC<any> = ({
  isOpen,
  eventLogs,
  trigger,
  handleOnPopoverChange,
}) => {
  return (
    <Popover open={isOpen} onOpenChange={handleOnPopoverChange}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent align="start" className="border-red-300 w-full">
        <VStack w="full" alignItems="flex-start">
          <Text className="font-bold text-gray-500 text-sm">
            Events Triggered
          </Text>
          {eventLogs.map(({ event, timestamp }: any, index: number) => {
            return (
              <Flex
                key={`event-${index}`}
                justifyContent="space-between"
                alignItems="center"
                w="full"
                gap={5}
              >
                <Flex gap={2} alignItems="center">
                  <CustomIcon
                    icon={lineIcon}
                    fontSize="lg"
                    className="text-red-800 cursor-not-allowed"
                  />
                  <Text className="text-gray-500 text-sm">{event}</Text>
                </Flex>
                <Box>
                  <Text className="text-gray-500 text-sm">{timestamp}</Text>
                </Box>
              </Flex>
            );
          })}
        </VStack>
      </PopoverContent>
    </Popover>
  );
};

export default EventPopoverNotification;
