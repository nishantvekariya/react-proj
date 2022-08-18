import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputComp from "./Input";
import { DatePicker, Select } from "antd";

const { Option } = Select;

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const [empName, setEmpName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [cityName, setCityName] = useState('');
  const [stateName, setStateName] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [panCard, setPanCard] = useState('');

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => { };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleGenderSelect = (value) => {
    console.log(`selected ${value}`);
  };

  const children = [];

  for (let i = 1; i < 6; i++) {
    children.push(<Option key={`Hobby` + i}>{`Hobby` + i}</Option>);
  }

  const handleHobbies = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        <InputComp
          handleChange={(e) => setEmpName(e.target.value)}
          value={empName}
          labelText="Employee Name"
          name="empName"
          isRequired={true}
          placeholder="Employee Name"
        />

        <div className="my-5">
          <p className="block mb-2 text-sm font-medium text-red-800">
            Birth Date
          </p>
          <DatePicker
            onChange={onChange}
            style={{
              width: '100%',
            }}
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
          />
        </div>

        <div className="my-5">
          <p className="block mb-2 text-sm font-medium text-red-800">
            Gender
          </p>
          <Select
            style={{
              width: '100%',
            }}
            onChange={handleGenderSelect}
          >
            <Option value="m">Male</Option>
            <Option value="f">Female</Option>
          </Select>
        </div>

        <div className="my-5">
          <p className="block mb-2 text-sm font-medium text-red-800">
            Seelct Hobbies
          </p>
          <Select
            mode="tags"
            style={{
              width: '100%',
            }}
            placeholder="Hobbies"
            onChange={handleHobbies}
          >
            {children}
          </Select>
        </div>

        <InputComp
          handleChange={(e) => setAddress1(e.target.value)}
          value={address1}
          labelText="Address 1"
          name="address1"
          isRequired={true}
          placeholder="Address 1"
        />

        <InputComp
          handleChange={(e) => setAddress2(e.target.value)}
          value={address2}
          labelText="Address 2"
          name="address2"
          isRequired={true}
          placeholder="Address 2"
        />

        <InputComp
          handleChange={(e) => setCityName(e.target.value)}
          value={cityName}
          labelText="City"
          name="cityName"
          isRequired={true}
          placeholder="City"
        />

        <InputComp
          handleChange={(e) => setStateName(e.target.value)}
          value={stateName}
          labelText="State"
          name="stateName"
          isRequired={true}
          placeholder="State"
        />

        <InputComp
          handleChange={(e) => setPinCode(e.target.value)}
          value={pinCode}
          labelText="Pin Code"
          name="pinCode"
          isRequired={true}
          placeholder="Pin Code"
        />

        <InputComp
          handleChange={(e) => setPanCard(e.target.value)}
          value={panCard}
          labelText="PAN"
          name="panCard"
          isRequired={true}
          placeholder="PAN"
        />

        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
};

export default Signup;
