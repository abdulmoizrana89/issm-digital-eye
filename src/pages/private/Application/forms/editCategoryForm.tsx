import { CustomBtn, CustomIcon } from "../../../../components";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import { useEffect, useState } from "react";
import baselineClose from "@iconify/icons-ic/baseline-close";
import { chakra } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface EditCategoryFormProps {
  onClose: () => void;
  rowInfo: {
    category: string;
    description: string;
  };
}
const EditCategoryForm = ({ onClose, rowInfo }: EditCategoryFormProps) => {
  const { register, handleSubmit } = useForm();

  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (model: string) => {
    if (!selected?.find((selectedModel) => selectedModel === model)) {
      setSelected([...selected, model]);
    }
  };

  const handleRemove = (model: string) => {
    const temp = selected.filter((selectedModel) => selectedModel != model);
    setSelected(temp);
  };

  const onSubmit = (data: any) => {
    const returnData = {
      category: data.category,
      description: data.description,
      selectedModels: selected,
    };
    console.log(returnData);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="my-5">
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Box className="bg-[#F1F4F7] rounded-[3px] p-[30px] flex flex-col gap-y-5 ">
          <Box>
            <Text>Name</Text>
            <Select
              bg="#F9F9F9"
              borderRadius="4px"
              focusBorderColor="#ABACAC"
              placeholder="check"
              defaultValue={rowInfo.category}
              {...register("category")}
            >
              <option value={rowInfo.category}>{rowInfo.category}</option>
            </Select>
          </Box>
          <Box>
            <Text>Description</Text>
            <Textarea
              backgroundColor="white"
              placeholder="Description"
              defaultValue={rowInfo.description}
              {...register("description")}
            />
          </Box>
          <Box>
            <Text>Model</Text>
            <Select
              bg="#F9F9F9"
              borderRadius="4px"
              focusBorderColor="#ABACAC"
              placeholder="Search"
              onChange={(e) => {
                if (e.target.value != "") handleSelect(e.target.value);
              }}
            >
              <option value="Model 1">Model 1</option>
              <option value="Model 2">Model 2</option>
              <option value="Model 3">Model 3</option>
            </Select>
            {selected?.map((model: string) => (
              <Flex className="items-center justify-between px-2 mt-2 w-[300px] h-[35px] bg-white ">
                <Text className="text-[16px] text-[#53565A] font-semibold ">
                  {model}
                </Text>
                <CustomIcon
                  icon={baselineClose}
                  fontSize="24px"
                  color="#C5C5C5"
                  onClick={() => {
                    handleRemove(model);
                  }}
                />
              </Flex>
            ))}
          </Box>
        </Box>
        <Flex className="justify-end mt-10 pt-5 gap-3 px-5">
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
        </Flex>
      </chakra.form>
    </div>
  );
};

export default EditCategoryForm;
