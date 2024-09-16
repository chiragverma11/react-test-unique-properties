import { FC } from "react";
import * as React from "react";

const MultiStepFormContext = React.createContext(undefined);

interface MultiStepFormProps extends React.ComponentPropsWithoutRef<"div"> {}

const MultiStepForm: FC<MultiStepFormProps> = ({ ...props }) => {
  return <MultiStepFormContext.Provider value={undefined} {...props} />;
};

const useMultiStepForm = () => {
  const context = React.useContext(MultiStepFormContext);
  if (!MultiStepFormContext) {
    throw new Error("useMultiStepForm should be used within <MultiStepForm>");
  }
  return context;
};

const MultiStepFormProvider: FC<MultiStepFormProps> = ({
  children,
  ...props
}) => {
  return <MultiStepForm {...props}>{children}</MultiStepForm>;
};

interface MultiStepsProps extends React.ComponentPropsWithoutRef<"div"> {
  steps: { name: string }[];
}
const MultiSteps: FC<MultiStepFormProps> = ({ steps, children, ...props }) => {
  return <MultiStepFormProvider {...props}>{children}</MultiStepFormProvider>;
};

export default MultiStepForm;
