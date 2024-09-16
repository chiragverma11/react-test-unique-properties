import React from "react";
import PhoneInput from "react-phone-number-input";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";

interface PhoneInputProps
  extends React.ComponentPropsWithoutRef<typeof Input> {}

const PhoneInput2: React.FC<PhoneInputProps> = ({ ...props }) => {
  const [value, setValue] = React.useState("");

  const InputComponent = React.forwardRef<
    HTMLInputElement,
    Parameters<typeof Input>[0]
  >((inputComponentProps) => {
    return <CustomInput {...inputComponentProps} {...props} />;
  });

  return (
    <PhoneInput
      international
      countryCallingCodeEditable={false}
      defaultCountry="US"
      value={value}
      onChange={(value) => value && setValue(value)}
      inputComponent={InputComponent}
    />
  );
};

const CustomInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>((props, ref) => <Input {...props} ref={ref} />);
CustomInput.displayName = "CustomInput";

export default PhoneInput2;
