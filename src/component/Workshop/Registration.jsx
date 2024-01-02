export default function Registration() {
    return (
      <div className="min-h-[50vh] font-Poppins flex-col  bg-Secondary w-full max-w-full flex items-center sm:px-5 lg:px-20 md:px-10 py-5 justify-center">
        <h1 className="font-Poppins font-bold text-5xl mb-10 text-zinc-700">
          Registration
        </h1>
        <div className="flex flex-col shadow-lg p-10 px-20 rounded">
          <p className="font-bold text-xl text-zinc-500 ">
            Contact To Register
            <span className="text-lg mx-2 font-medium text-gray-500 ">
              Ms. Supriya HS{" "}
            </span>
          </p>
          <p className="font-bold text-xl text-zinc-500 ">
            Phone
            <span className="text-lg mx-2 font-medium text-gray-500 ">
              +91- 733 910 3001{" "}
            </span>
          </p>
          <p className="font-bold text-xl text-zinc-500 ">
            Email
            <span className="text-lg mx-2 font-medium text-gray-500 ">
              training@rbg.ai
            </span>
          </p>
          <button className="my-5 text-blue-100 bg-blue-600 px-4 py-2 rounded shadow">
            Register
          </button>
        </div>
      </div>
    );
  }
  