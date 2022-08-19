/* eslint-disable no-template-curly-in-string */
import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputComp from "./Input";
import { DatePicker, Select, Form, Input, Button } from "antd";
import moment from "moment";

const { Option } = Select;

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const [empName, setEmpName] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [panCard, setPanCard] = useState("");

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  const onFinish = (fieldsValue) => {
    // console.log(fieldsValue.user['bDate']);
    const values = {
      ...fieldsValue.user,
      "bDate": fieldsValue.user['bDate'].format("DD-MM-YYYY"),
    };
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

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

  const fixedInputClass =
    "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm";

  return (
    <>
      <Form
        name="nest-messages"
        className="mt-8"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          rules={[{ required: true }]}
          label="Name"
        >
          <Input className={fixedInputClass} />
        </Form.Item>

        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input className={fixedInputClass} />
        </Form.Item>

        <Form.Item
          name={["user", "bDate"]}
          rules={[{ required: true }]}
          label="Birth Date"
        >
          <DatePicker
            style={{
              width: "100%",
            }}
            format="DD-MM-YYYY"
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name={["user", "gender"]}
          label="Gender"
        >
          <Select style={{ width: "100%" }}>
            <Option value="m">Male</Option>
            <Option value="f">Female</Option>
          </Select>
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name={["user", "hobbies"]}
          label="Hobbies"
        >
          <Select
            mode="tags"
            style={{
              width: "100%",
            }}
            placeholder="Hobbies"
          >
            {children}
          </Select>
        </Form.Item>

        <Form.Item
          name={["user", "add1"]}
          rules={[{ required: true }]}
          label="Address 1"
        >
          <Input className={fixedInputClass} />
        </Form.Item>

        <Form.Item
          name={["user", "add2"]}
          rules={[{ required: true }]}
          label="Address 2"
        >
          <Input className={fixedInputClass} />
        </Form.Item>

        <Form.Item
          name={["user", "city"]}
          rules={[{ required: true }]}
          label="City"
        >
          <Input className={fixedInputClass} />
        </Form.Item>

        <Form.Item
          name={["user", "state"]}
          rules={[{ required: true }]}
          label="State"
        >
          <Input className={fixedInputClass} />
        </Form.Item>

        <Form.Item
          name={["user", "pin"]}
          rules={[{ required: true }]}
          label="Pin Code"
        >
          <Input
            className={fixedInputClass}
            handleChange={(e) => e.target.value.replace(/\D/g, "")}
            minLength={6}
            maxLength={6}
          />
        </Form.Item>

        <Form.Item
          name={["user", "pan"]}
          rules={[{ required: true }]}
          label="PAN"
        >
          <Input className={fixedInputClass} minLength={10} maxLength={10} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="group relative w-full h-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-800 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 mt-10"
          >
            Signup
          </Button>
        </Form.Item>
      </Form>
      {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          <InputComp
            handleChange={(e) => setEmpName(e.target.value)}
            value={empName}
            labelText="Employee Name"
            name="empName"
            isRequired={true}
            placeholder="Employee Name"
          />

          <InputComp
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
            labelText="Email"
            name="email"
            isRequired={true}
            placeholder="Email"
          />

          <div className="my-5">
            <p className="block mb-2 text-sm font-medium text-red-800">
              Birth Date
            </p>
            <DatePicker
              onChange={onChange}
              style={{
                width: "100%",
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
                width: "100%",
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
                width: "100%",
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
            handleChange={(e) => setPinCode(e.target.value.replace(/\D/g, ""))}
            value={pinCode}
            labelText="Pin Code"
            name="pinCode"
            isRequired={true}
            placeholder="Pin Code"
            maxLength={6}
          />

          <InputComp
            handleChange={(e) => setPanCard(e.target.value)}
            value={panCard}
            labelText="PAN"
            name="panCard"
            isRequired={true}
            placeholder="PAN"
            maxLength={10}
          />

          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>
      </form> */}
    </>
  );
};

export default Signup;
