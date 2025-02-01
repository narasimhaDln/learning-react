import { FieldConfig } from "./FieldsConfig";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  FormErrorMessage,
  Stack
} from "@chakra-ui/react";

interface InputFieldProps {
  field: FieldConfig;
  value: any;
  error?: string;
  onChange: (name: string, value: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({ field, value, error, onChange }) => {
  if (field.conditional && value[field.conditional.field] !== field.conditional.value) {
    return null;
  }

  switch (field.type) {
    case "text":
    case "email":
    case "number":
      return (
        <FormControl isInvalid={!!error} isRequired={field.validation?.required}>
          <FormLabel>{field.label}</FormLabel>
          <Input
            type={field.type}
            name={field.name}
            value={value || ""}
            onChange={(e) => onChange(field.name, e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      );

    case "select":
      return (
        <FormControl isInvalid={!!error} isRequired={field.validation?.required}>
          <FormLabel>{field.label}</FormLabel>
          <Select
            name={field.name}
            value={value || ""}
            onChange={(e) => onChange(field.name, e.target.value)}
            placeholder={`Select ${field.label}`}
          >
            {field.options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      );

    case "checkbox":
      return (
        <FormControl isInvalid={!!error} isRequired={field.validation?.required}>
          <Stack spacing={5} direction="row">
            <Checkbox
              name={field.name}
              isChecked={value || false}
              onChange={(e) => onChange(field.name, e.target.checked)}
            >
              {field.label}
            </Checkbox>
            
          </Stack>
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      );

    default:
      return null;
  }
};

export default InputField;