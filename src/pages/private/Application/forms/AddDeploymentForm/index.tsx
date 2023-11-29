import { useState } from "react";
import { CustomBtn } from "../../../../../components";
import { Box, Flex, Text } from "@chakra-ui/react";

import DeploymentDetails from "./DeploymentDetails";
import SelectDevices from "./SelectDevices";
import MLModelSelection from "./MLModelSelection";
import SelectROI from "./SelectROI";
import EventSelection from "./EventSelection";

interface AddDeploymentFormProps {
  onClose: () => void;
}

const AddDeploymentForm = ({ onClose }: AddDeploymentFormProps) => {
  const [step, setStep] = useState<number>(0);
  const headings = [
    "Step 1: Deployment Details",
    "Step 2: Select Devices",
    "Step 3: ML Model Selection",
    "Step 4: Select ROI",
    "Step 5: Event Selection",
  ];
  return (
    <div className="my-5 min-h-[510px] flex flex-col justify-between">
      <div>
        <Box className="bg-[#F1F4F7] rounded-[3px] py-[10px] px-[20px] font-semibold flex flex-col gap-y-5 ">
          <Text>{headings[step]}</Text>
        </Box>
        {step == 0 ? (
          <DeploymentDetails />
        ) : step == 1 ? (
          <SelectDevices />
        ) : step == 2 ? (
          <MLModelSelection />
        ) : step == 3 ? (
          <SelectROI />
        ) : (
          <EventSelection />
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
