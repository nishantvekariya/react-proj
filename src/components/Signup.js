import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputComp from "./Input";
import { DatePicker } from "antd";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <InputComp
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}

        <DatePicker onChange={onChange} />

        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
};

export default Signup;
