const FormExtra = () => {
    return (
        <div className="flex items-center justify-between ">
            <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                </label>
            </div>

            <div className="text-sm">
                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                    Forgot your password?
                </a>
            </div>
        </div>

    )
}

export default FormExtra;