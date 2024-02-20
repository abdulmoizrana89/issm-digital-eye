import { useRef, useTransition, forwardRef, useImperativeHandle } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Icon as ChakraIcon,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Controller, useForm } from "react-hook-form";

interface SearchFieldProps {
  name?: string;
  searchTerm: string;
  onSearchTermChange: (val: string) => void;
}

const SearchField = forwardRef(
  (
    { name = "search", searchTerm, onSearchTermChange }: SearchFieldProps,
    ref
  ) => {
    const inputRef = useRef<null | HTMLDivElement>(null);
    const { control, reset } = useForm({
      defaultValues: { [name]: "" },
    });
    const [_, startTransition] = useTransition();

    useImperativeHandle(
      ref,
      () => {
        return {
          reset,
          scrollIntoView: (options = {}) => {
            inputRef?.current?.scrollIntoView(options);
          },
        };
      },
      [reset]
    );

    return (
      <Controller
        name={name}
        control={control}
        defaultValue={searchTerm}
        render={({ field: { onChange, ...field } }) => {
          return (
            <InputGroup ref={inputRef}>
              <Input
                placeholder="Search"
                {...field}
                onChange={(e) => {
                  onChange(e);
                  startTransition(() => {
                    onSearchTermChange(e.target.value);
                  });
                }}
              />
              <InputRightElement>
                <ChakraIcon
                  fontSize="16"
                  color="#696969"
                  as={Icon}
                  icon={"material-symbols:search"}
                />
              </InputRightElement>
            </InputGroup>
          );
        }}
      />
    );
  }
);

export default SearchField;
