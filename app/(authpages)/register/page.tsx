const RegisterPage = () => {
  return (
    <div className="flex items-center h-screen">

      <div className="hidden bg-slate-300 h-screen md:flex md:w-2/3  items-center">
        <h2 className="m-auto text-2xl px-11 text-center font-extrabold"> Embark on an educational journey where learning meets thrilling adventure</h2>
      </div>
      <div className=" bg-white rounded-lg m-auto shadow-lg p-12">
        <h2 className="text-2xl text-center font-bold mb-4">Register</h2>
        <h3 className="text-center mb-6"> If you already have an account <a className='text-blue-700' href="./login/"> sign in </a></h3>
        <form>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input type="email" id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
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
            Login
          </button>
        </form>
      </div>


    </div>
  );
};


export default RegisterPage;