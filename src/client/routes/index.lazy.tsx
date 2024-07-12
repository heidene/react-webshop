import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-full">
      <div className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Want to buy some products?</span>
            <span className="block text-indigo-500">Why not today!</span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <Link to="/plp" 
                className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Take me to the products!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
          <div className="relative">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                      <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                          Quality
                      </p>
                      <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                          Only the best resources, for the best quality products
                      </h4>
                      <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                          Each and every resources that goes into our products are sourced from trusted third-party partners.
                      </p>
                      <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                          <li className="mt-6 lg:mt-0">
                              <div className="flex">
                                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                          </path>
                                      </svg>
                                  </span>
                                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                      Ethically sourced
                                  </span>
                              </div>
                          </li>
                          <li className="mt-6 lg:mt-0">
                              <div className="flex">
                                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                          </path>
                                      </svg>
                                  </span>
                                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                      Emission neutral
                                  </span>
                              </div>
                          </li>
                          <li className="mt-6 lg:mt-0">
                              <div className="flex">
                                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                          </path>
                                      </svg>
                                  </span>
                                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                      Near supply chain
                                  </span>
                              </div>
                          </li>
                          <li className="mt-6 lg:mt-0">
                              <div className="flex">
                                  <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                          </path>
                                      </svg>
                                  </span>
                                  <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                      Nothing is wasted
                                  </span>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                      <div className="relative space-y-4">
                          <div className="flex items-end justify-center space-x-4 lg:justify-start">
                              <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://images.placeholders.dev/?width=208&height=250&text=product" alt="1"/>
                              <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src="https://images.placeholders.dev/?width=208&height=250&text=product" alt="2"/>
                          </div>
                          <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                              <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src="https://images.placeholders.dev/?width=208&height=250&text=product" alt="3"/>
                              <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://images.placeholders.dev/?width=208&height=250&text=product" alt="4"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
