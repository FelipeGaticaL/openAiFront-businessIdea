import "./style.css";
import { Formik, Field, Form } from "formik";
import { useState} from "react";
import { postPrompt } from "./hooks/postPromt";
import Swal from "sweetalert2";

function App() {
  const [prompt, setPrompt] = useState(false);

  console.log(prompt.data);

  return (
    <>
      {/* Section 1 */}
      <div className="h-screen grid content-center ">
        <div className="flex justify-center">
          <div className="flex flex-col">
            <h1 className="text-6xl tracking-in-expand-fwd-top font-extrabold text-white pb-10">
              Business ideas
            </h1>
            <Formik
              initialValues={{ firstParameter: "", secondParameter: "" }}
              onSubmit={async (values) => {
                try {
                  const data = await postPrompt(values);
                  await setPrompt(data);
                  Swal.fire({
                    title: `Query made`,
                    text: `Let's wait for the answer`,
                    icon: `success`,
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <div className="flex justify-center">
                <Form className="flex flex-col rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 w-4/5">
                  <div className="flex">
                    <p className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      1º Idea
                    </p>

                    <Field
                      name="firstParameter"
                      type="text"
                      className="w-full p-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex">
                    <p className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      2º Idea
                    </p>

                    <Field
                      name="secondParameter"
                      type="text"
                      className="w-full p-2 mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5"
                    >
                      Send to IA
                    </button>
                  </div>
                </Form>
              </div>
            </Formik>
          </div>
        </div>
      </div>
      {/* Section 2 */}

      <div className="flex justify-center">
        <div className="flex rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 w-4/5">
          {prompt === false ? (
            <div class="typing-demo text-white">This is a typing demo.</div>
          ) : (
            <div class="typing-demo text-white">{prompt.data}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
