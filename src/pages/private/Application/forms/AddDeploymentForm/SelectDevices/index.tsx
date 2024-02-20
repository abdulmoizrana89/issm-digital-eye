import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Checkbox,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import searchIcon from "@iconify/icons-carbon/search";
import { CustomIcon } from "../../../../../../components";

const SelectDevices = () => {
  const data = [
    {
      officeName: "Office 1",
      categories: [
        {
          catName: "Cat801",
          subCats: [
            {
              subCatName: "SubCat01",
              devices: ["Device 1", "Device 11"],
            },
            {
              subCatName: "SubCat011",
              devices: ["Device 54", "Device 115"],
            },
          ],
        },
        {
          catName: "Cat017",
          subCats: [
            {
              subCatName: "SubCat081",
              devices: ["Device 16", "Device 151"],
            },
            {
              subCatName: "SubCat0/1",
              devices: ["Device 16", "Device 1/1"],
            },
          ],
        },
      ],
    },
    {
      officeName: "Office 2",
      categories: [
        {
          catName: "Cat02",
          subCats: [
            {
              subCatName: "SubCat02",
              devices: ["Device 2", "Device 22"],
            },
          ],
        },
      ],
    },
    {
      officeName: "Office 3",
      categories: [
        {
          catName: "Cat03",
          subCats: [
            {
              subCatName: "SubCat03",
              devices: ["Device 3", "Device 33"],
            },
          ],
        },
      ],
    },
  ];
  const [selectedOffice, setSelectedOffice] = useState<number>(0);
  return (
    <Flex className="py-[30px]">
      <Box className="p-2 w-[25%] h-[300px]">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<CustomIcon icon={searchIcon} />}
          />
          <Input type="text" placeholder="Search" className="rounded-[3px]" />
        </InputGroup>
        <Flex className="flex-col gap-y-1 mt-5 pb-1 max-h-[300px] overflow-y-scroll">
          {data.map((office) => {
            return (
              <Box
                className={`cursor-pointer border-2 py-1 px-3 rounded ${
                  selectedOffice == data.indexOf(office) && "bg-[#F1F4F7]"
                }`}
                onClick={() => setSelectedOffice(data.indexOf(office))}
              >
                <Text>{office.officeName}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>

      <Box className="p-2 w-[75%] h-[300px]">
        <Box className="bg-[#F1F4F7] rounded-[3px] py-[8px] px-[20px] font-semibold flex flex-col gap-y-5 ">
          <Text>{data[selectedOffice]?.officeName}</Text>
        </Box>

        <Box className="pt-5 pl-5 flex flex-col gap-y-2 max-h-[300px] overflow-y-scroll">
          {data[selectedOffice]?.categories.map((category) => {
            return (
              <Box className=" bg-[#F1F4F7] rounded">
                <Accordion allowMultiple>
                  <AccordionItem border="0">
                    {({ isExpanded }) => (
                      <>
                        <Flex
                          className={`justify-between items-center px-2 ${
                            isExpanded && "border-b-2"
                          }`}
                        >
                          <AccordionButton _hover={{ bg: "tranparent" }}>
                            <AccordionIcon />
                            <Text>{category.catName}</Text>
                          </AccordionButton>
                          <Badge
                            py="2px"
                            px="15px"
                            rounded="4px"
                            backgroundColor="white"
                            textColor="#8A8A8A"
                            cursor="pointer"
                          >
                            Select all
                          </Badge>
                        </Flex>
                        <AccordionPanel>
                          {category.subCats.map((subCategory) => {
                            return (
                              <Accordion allowMultiple>
                                <AccordionItem border="0">
                                  {({ isExpanded }) => (
                                    <>
                                      <Flex className="justify-between items-center px-2">
                                        <AccordionButton
                                          _hover={{ bg: "tranparent" }}
                                        >
                                          <AccordionIcon />
                                          <Text>{subCategory.subCatName}</Text>
                                        </AccordionButton>
                                        <div
                                          className={`flex items-center ${
                                            !isExpanded && "hidden"
                                          }`}
                                        >
                                          <Checkbox className="bg-white" />
                                        </div>
                                      </Flex>
                                      <AccordionPanel>
                                        <Box
                                          className={`p-2 pl-10 flex flex-col gap-y-2`}
                                        >
                                          {subCategory.devices.map((device) => {
                                            return (
                                              <Flex
                                                className={`cursor-pointer py-1 px-3 rounded bg-white justify-between`}
                                              >
                                                <Text>{device}</Text>
                                                <Checkbox />
                                              </Flex>
                                            );
                                          })}
                                        </Box>
                                      </AccordionPanel>
                                    </>
                                  )}
                                </AccordionItem>
                              </Accordion>
                            );
                          })}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Flex>
  );
};

export default SelectDevices;
