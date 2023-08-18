import React from "react";

function Newsletter() {
  return (
    <>
      <div className="bg-indigo-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
            <div className="lg:flex-1 xl:w-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Email Newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                Sign up for our email newsletter to stay up to date.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:ml-8 xl:mt-0">
              <form
                className="sm:flex"
                action="#"
                method="post"
                id="revue-form"
                name="revue-form"
                target="_blank"
              >
                <input
                  type="email"
                  name="member[email]"
                  id="member_email"
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-0"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-0 sm:ml-3 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-indigo-200">
                We will never send any spam emails. Promise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
