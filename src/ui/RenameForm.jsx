import React from "react";
import Form from "./Form";
import FormRow from "./FormRow";
import Input from "./Input";
import IconButton from "./IconButton";
import { HiCheck } from "react-icons/hi2";

// Use React.forwardRef to wrap your component function
const RenameForm = React.forwardRef(({ onSubmit, onChange, value }, ref) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormRow label="Rename collection" inputId="rename-collection" labelVariation="hidden">
        <div className="flex gap-1">
           <Input
          ref={ref} // This ref is now forwarded correctly to the Input
          variation="app"
          onChange={onChange}
          type="text"
          id="rename-collection"
          name="rename-collection"
          value={value}
        />
        <IconButton
          type="submit"
          Icon={HiCheck}
          ariaLabel="Close rename"
          hoverIconColor="green-400"
        />
        </div>
       
      </FormRow>
    </Form>
  );
});

RenameForm.displayName = "RenameForm";

export default RenameForm;
