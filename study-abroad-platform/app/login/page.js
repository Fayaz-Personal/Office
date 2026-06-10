export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-800">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            Study Abroad Navigator
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="block text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>

            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Do not have an account?
          </p>

          <a
            href="/register"
            className="text-blue-700 font-semibold hover:underline"
          >
            Create Account
          </a>
        </div>

      </div>

    </div>
  );
}