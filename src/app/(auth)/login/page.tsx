import Button from "@/src/components/button/Button";
import Input from "@/src/components/input/Input";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Input
              id="email"
              name="email"
              type="email"
              required
              label="Email address"
            />
          </div>

          <div>
            <Input
              id="password"
              name="password"
              type="password"
              required
              label="Password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  required"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                Remember me
              </label>
            </div>

            <Link
              className="text-sm font-medium text-primary hover:text-indigo-500"
              href="/auth/forgot-password"
            >
              Forgot your password?
            </Link>
          </div>

          <div>
            <Button variant="primary" className="w-full">
              Sign in
            </Button>
          </div>
        </form>

        <div className="relative flex py-8 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink text-sm mx-4 text-gray-900">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <Button variant="secondary" className="w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
          >
            <path
              fill="#fbc02d"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#e53935"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4caf50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1565c0"
              d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          Login with Google
        </Button>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-primary hover:text-indigo-500"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
