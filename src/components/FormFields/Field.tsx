import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

// TODO: add select input
// import SelectInput from "components/Others/SelectInput";

const ConnectForm = ({ children }) => {
  const methods = useFormContext();
  return children({ ...methods });
};

const fieldMap = {
  number: Input,
  text: Input,
  // select: SelectInput,
};

const Field = ({
  name,
  type,
  label,
  required = false,
  ...fieldProps
}: {
  name: string;
  type: string;
  label: string;
  required?: boolean;
}) => {
  const Field = fieldMap[type] || Input;
  return (
    <ConnectForm>
      {({ register, formState }: any) => {
        const { errors } = formState;
        return (
          <FormControl
            id={name}
            isInvalid={errors?.[name]}
            isRequired={required}
          >
            {label ? <FormLabel>{label}</FormLabel> : null}
            <Field
              type={type}
              name={name}
              // passinig register for custom inputs
              // calling register for normal inputs
              {...(type === "select" ? { register } : register(name))}
              {...fieldProps}
            />
            <FormErrorMessage>
              {errors?.[name] ? errors[name].message : ""}
            </FormErrorMessage>
          </FormControl>
        );
      }}
    </ConnectForm>
  );
};

export default Field;
