const RegisterPage = () => {
  return (
    <div className="flex items-center m-10 h-screen">
      <div className="hidden md:flex md:w-2/3">  Login to your account </div>
      <div className="w-1/3 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl text-center font-bold mb-4">Register</h2>
        <h3 className="text-center"> If you have an account <a className='text-blue-700' href="./login/"> sign in </a></h3>
        <form>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input type="email" id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};


export default RegisterPage;