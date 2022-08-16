import { Input } from "antd";

const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"

const InputComp = ({
    handleChange,
    value,
    labelText,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass
}) => {
    return (
        <div className="my-5">
            <p className="block mb-2 text-sm font-medium text-red-800">
                {labelText}
            </p>
            <Input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
            />
        </div>
    )
};

export default InputComp;