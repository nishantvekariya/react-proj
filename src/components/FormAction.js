import { Button } from "antd";

const FormAction = ({
    handleSubmit,
    type='Button',
    action='submit',
    text
}) => {
    return(
        <>
        {
            type==='Button' ?
            <Button
                type={action}
                className="group relative w-full h-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-800 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 mt-10"
                onSubmit={handleSubmit}
            >

                {text}
            </Button>
            :
            <></>
        }
        </>
    )
};

export default FormAction;