import searchIcon from "@iconify/icons-carbon/search";
import { useEffect, useState } from "react";
import arrowRight2 from "@iconify/icons-iconamoon/arrow-right-2";

import { CustomBtn, CustomIcon } from "../../../../components";
import {
  Box,
  Checkbox,
  Flex,
  Input,
  Select,
  Text,
  Textarea,
  Image,
  InputGroup,
  InputLeftElement,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import { ROI } from "../../../../assets";

interface AddDeploymentFormProps {
  onClose: () => void;
}

const AddDeploymentForm = ({ onClose }: AddDeploymentFormProps) => {
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
  const [selectedOffice, setSelectedOffice] = useState<{
    officeName: string;
    categories: {
      catName: string;
      subCats: {
        subCatName: string;
        devices: string[];
      }[];
    }[];
  }>();
  const [selectedCat, setSelectedCat] = useState<{
    catName: string;
    subCats: {
      subCatName: string;
      devices: string[];
    }[];
  }>();
  const [selectedSubCat, setSelectedSubCat] = useState<{
    subCatName: string;
    devices: string[];
  }>();
  const [selectedDevice, setSelectedDevice] = useState<string>();
  const h = "35px";
  const w = "100px";
  const [appName, setAppName] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const headings = [
    "Step 1: Deployment Details",
    "Step 2: Select Devices",
    "Step 3: ML Model Selection",
    "Step 4: Select ROI",
    "Step 5: Event Selection",
  ];

  useEffect(() => {
    setSelectedCat(undefined);
  }, [selectedOffice]);
  useEffect(() => {
    setSelectedSubCat(undefined);
  }, [selectedCat]);

  return (
    <div className="my-5 min-h-[510px] flex flex-col justify-between">
      <div>
        <Box className="bg-[#F1F4F7] rounded-[3px] py-[10px] px-[20px] font-semibold flex flex-col gap-y-5 ">
          <Text>{headings[step]}</Text>
        </Box>
        {step == 0 ? (
          <Flex className="p-[30px] flex-col gap-y-5">
            <Flex className="w-[55%] justify-between items-center">
              <Text>Name</Text>
              <Input width="400px" placeholder="Name" />
            </Flex>
            <Flex className="w-[55%] justify-between">
              <Text>Description</Text>
              <Textarea
                height="150px"
                width="400px"
                placeholder="Description"
              />
            </Flex>
          </Flex>
        ) : step == 1 ? (
          <Flex className="py-[30px]">
            <Box className="p-2 w-[25%] h-[300px]">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CustomIcon icon={searchIcon} />}
                />
                <Input
                  type="text"
                  placeholder="Search"
                  className="rounded-[3px]"
                />
              </InputGroup>
              <Flex className="flex-col gap-y-2 mt-5">
                {data.map((index) => {
                  return (
                    <Box
                      className={`cursor-pointer border-2 py-1 px-3 rounded ${
                        selectedOffice?.officeName == index.officeName &&
                        "bg-[#F1F4F7]"
                      }`}
                      onClick={() => setSelectedOffice(index)}
                    >
                      <Text>{index.officeName}</Text>
                    </Box>
                  );
                })}
              </Flex>
            </Box>

            <Box className="p-2 w-[75%] h-[300px]">
              <Box className="bg-[#F1F4F7] rounded-[3px] py-[8px] px-[20px] font-semibold flex flex-col gap-y-5 ">
                <Text>{selectedOffice?.officeName}</Text>
              </Box>

              <Box className="pt-5 pl-5 flex flex-col gap-y-5">
                {/* <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem borderTop="0" className="bt-0">
                    <Flex className="justify-between items-center">
                      <AccordionButton>
                        <AccordionIcon />
                        <Text>Section 1 title</Text>
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
                  </AccordionItem>
                </Accordion> */}
                {selectedOffice?.categories.map((index) => {
                  return (
                    <Box className=" bg-[#F1F4F7] rounded">
                      <Flex className="px-3 py-1 justify-between border-b-2">
                        <Flex className="items-center" cursor="pointer">
                          <CustomIcon
                            icon={arrowRight2}
                            fontSize="24px"
                            color="#8A8A8A"
                            className={`${
                              selectedCat?.catName == index.catName &&
                              "rotate-90"
                            }`}
                            onClick={() => setSelectedCat(index)}
                          />
                          <Text>{index.catName}</Text>
                        </Flex>

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

                      <Box
                        className={`pt-5 pl-5 ${
                          selectedCat?.catName != index.catName && "hidden"
                        }`}
                      >
                        {selectedCat?.subCats.map((index) => {
                          return (
                            <>
                              <Flex className="px-3 py-1 justify-between">
                                <Flex className="items-center" cursor="pointer">
                                  <CustomIcon
                                    icon={arrowRight2}
                                    fontSize="24px"
                                    color="#8A8A8A"
                                    className={`${
                                      selectedSubCat?.subCatName ==
                                        index.subCatName && "rotate-90"
                                    }`}
                                    onClick={() => setSelectedSubCat(index)}
                                  />
                                  <Text>{index.subCatName}</Text>
                                </Flex>

                                <div
                                  className={`flex items-center ${
                                    selectedSubCat?.subCatName !=
                                      index.subCatName && "hidden"
                                  }`}
                                >
                                  <Checkbox className="bg-white" />
                                </div>
                              </Flex>

                              <Box
                                className={`p-2 pl-10 flex flex-col gap-y-2 ${
                                  selectedSubCat?.subCatName !=
                                    index.subCatName && "hidden"
                                }`}
                              >
                                {selectedSubCat?.devices.map((index) => {
                                  return (
                                    <Flex
                                      className={`cursor-pointer py-1 px-3 rounded bg-white justify-between`}
                                    >
                                      <Text>{index}</Text>
                                      <Checkbox />
                                    </Flex>
                                  );
                                })}
                              </Box>
                            </>
                          );
                        })}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Flex>
        ) : step == 2 ? (
          <Flex className="p-[30px] flex-col gap-y-5">
            <Flex className="w-[61%] justify-between items-center">
              <Text>Name</Text>
              <Select
                bg="#F9F9F9"
                borderRadius="4px"
                focusBorderColor="#ABACAC"
                width="400px"
                placeholder="Application Name"
                onChange={(event) => {
                  setAppName(event.target.value);
                }}
              >
                <option value="Mask Detection">Mask Detection</option>
              </Select>
            </Flex>
            {appName != "" && (
              <>
                <Flex className="w-[61%] justify-between items-center">
                  <Text>Application Category</Text>
                  <Input width="400px" />
                </Flex>
                <Flex className="w-[61%] justify-between items-center">
                  <Text>Model Name</Text>
                  <Input width="400px" />
                </Flex>
              </>
            )}
          </Flex>
        ) : step == 3 ? (
          <Flex className="p-[30px] justify-between">
            <Box className=" w-[50%] flex flex-col gap-y-3 h-[300px]">
              <Flex className="justify-between items-center">
                <Text className=" ">Name</Text>
                <Input width="360px" />
              </Flex>
              <Flex className="justify-between items-center">
                <Text>Region Type</Text>
                <Select
                  bg="#F9F9F9"
                  borderRadius="4px"
                  focusBorderColor="#ABACAC"
                  width="360px"
                  placeholder="Select"
                >
                  <option value="Rectangle / line">Rectangle / line</option>
                </Select>
              </Flex>
              <Flex className="justify-end">
                <Checkbox>Crop ROI</Checkbox>
              </Flex>
            </Box>
            <Box className="w-[48%] h-[300px]">
              <Image src={ROI} alt="image" objectFit="cover" />
              <Flex className="flex-wrap justify-between gap-y-2 mt-5">
                <CustomBtn
                  title="Get Live View"
                  color="secondaryBtn"
                  borderColor="#D7D7D7"
                  textColor="#696969"
                  height={h}
                  width={w}
                  isLoading={false}
                />
                <CustomBtn
                  title="Fetch"
                  color="secondaryBtn"
                  borderColor="#D7D7D7"
                  textColor="#696969"
                  height={h}
                  width={w}
                  isLoading={false}
                />
                <CustomBtn
                  title="Clear"
                  color="secondaryBtn"
                  borderColor="#D7D7D7"
                  textColor="#696969"
                  height={h}
                  width={w}
                  isLoading={false}
                />
                <CustomBtn
                  title="Done"
                  color="secondaryBtn"
                  borderColor="#D7D7D7"
                  textColor="#696969"
                  height={h}
                  width={w}
                  isLoading={false}
                />
              </Flex>
            </Box>
          </Flex>
        ) : (
          <Flex className="py-[30px] flex-col gap-y-5">
            <Flex className="px-[30px] justify-between">
              <Flex className="w-[86%] justify-between items-center">
                <Text>Select Event</Text>
                <Input width="680px" placeholder="Search" />
              </Flex>
              <CustomBtn
                title="Add"
                color="secondaryBtn"
                borderColor="secondary.10"
                bgColor="secondary.10"
                textColor="#fff"
                height="40px"
                width="120px"
                isLoading={false}
              />
            </Flex>
            <Box className="bg-[#F1F4F7] rounded-[3px] overflow-y-scroll h-[300px]">
              <Box className="bg-[#F1F4F7] rounded-[3px] p-[30px] flex flex-col gap-y-3 ">
                <Box>
                  <Text>Event Name</Text>
                  <Input backgroundColor="white" />
                </Box>
                <Box>
                  <Text>Event Notification</Text>
                  <Textarea height="150px" backgroundColor="white" />
                </Box>
              </Box>
            </Box>
          </Flex>
        )}
      </div>
      <Flex className="justify-end mt-10 pt-5 gap-3 px-5 border-t-2">
        <CustomBtn
          title="Cancel"
          color="secondaryBtn"
          borderColor="secondary.10"
          textColor="secondary.10"
          height="40px"
          width="120px"
          isLoading={false}
          onClick={onClose}
        />
        {step != 4 ? (
          <CustomBtn
            title="Next"
            color="secondaryBtn"
            borderColor="secondary.10"
            bgColor="secondary.10"
            textColor="#fff"
            height="40px"
            width="120px"
            isLoading={false}
            onClick={() => setStep(step + 1)}
          />
        ) : (
          <CustomBtn
            title="Save"
            color="secondaryBtn"
            borderColor="secondary.10"
            bgColor="secondary.10"
            textColor="#fff"
            height="40px"
            width="120px"
            isLoading={false}
          />
        )}
      </Flex>
    </div>
  );
};

export default AddDeploymentForm;
