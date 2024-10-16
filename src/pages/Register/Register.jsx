import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);

  // Register
  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        updateProfile(result.user, {
          displayName: username,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // console.log(createUser)

  return (
    <div>
      <div className="flex mx-auto mt-6 flex-col max-w-md rounded-md sm:p-10 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register Account</h1>
        </div>
        <form onSubmit={handleRegister} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm text-left"
              >
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="username"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-left">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400 dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400 dark:text-gray-600">
              Don&apos; have an account yet?
              <Link
                to={"/login"}
                className="hover:underline text-violet-400 font-semibold dark:text-violet-600"
              >
                Log In
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
