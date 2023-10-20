import React from "react";
import Editor from "@monaco-editor/react";
const Coading = () => {
  return (
    <div className="my-28 mx-8 my">
      <div className="flex">
        <div className="w-[40vw] mr-5">
          <h2 className="text-2xl font-bold mb-4">1. Two Sum Problem</h2>
          <p className="mb-5">Solve it</p>
          {/* <Button
            value={"Submit"}
            //   onClick={handleSubmit}
            //   loading={loading}
            className={"w-fit"}
          /> */}
          <button>Submit</button>
          <button>Run</button>
          {/* <Button
            value={"Run"}
            //   onClick={handleRun}
            //   loading={runLoading}
            className={"w-fit bg-green-700 ml-5 px-5"}
          /> */}

          <h6 className="mt-5 text-base font-bold mb-2">Test Cases</h6>
          <div className="bg-neutral-800 p-3 rounded-md text-white">
            <div className="flex gap-3 text-sm mb-1">
              <span>Input: </span>
              <div>1 2</div>
            </div>
            <div className="flex gap-3 text-sm">
              <span>Output: </span>
              <div>3</div>
            </div>
          </div>

          <h6 className="mt-5 text-base font-bold mb-2">Output</h6>
          <div className="bg-neutral-800 min-h-[200px] p-4 rounded-md overflow-hidden">
            {/* {outputError && (
                <p className="text-sm text-red-500">{outputError}</p>
              )}
              {output && <p className="text-sm text-green-500">{output}</p>} */}
          </div>
        </div>
        <div className="flex-1 relative">
          <select
            //   onChange={(e) => setSelectedLanguage(e.target.value)}
            className="absolute top-1 right-1 z-50 bg-gray-100 outline-none rounded-md text-sm"
          >
            <option className="text-xs">python</option>
            {/* {languages.map((language) => (
                <option
                  value={language}
                  key={language}
                  defaultValue={languages[0]}
                  className="text-xs"
                >
                  {language}
                </option>
              ))} */}
          </select>
          <Editor
            height="85vh"
            theme="vs-dark"
            //   onMount={handleEditorDidMount}
            //   defaultLanguage={selectedLanguage.toLocaleLowerCase()}
            //   value={question?.template[selectedLanguage.toLocaleLowerCase()]}
          />
        </div>
      </div>
    </div>
  );
};

export default Coading;
