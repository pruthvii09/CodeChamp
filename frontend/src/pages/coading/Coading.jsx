import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { useUserContext } from "../../hooks/useUserContext";

const Coading = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const textareaRef = useRef();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [output, setOutput] = useState("");
  const [outputError, setOutputError] = useState("");
  const [runLoading, setRunLoading] = useState(false);
  const fetchQuestion = async () => {
    setFetchLoading(true);
    const response = await fetch(`http://localhost:4000/api/question/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      setQuestion(json?.question);
    }
    if (!response.ok) {
      console.log(json);
    }
    setFetchLoading(false);
  };
  useEffect(() => {
    fetchQuestion();
  }, [id]);
  useEffect(() => {
    setLanguages(question?.template);
    console.log("Updated languages:", question?.template);
    console.log("Updated question:", question);
  }, [question]);
  function getTemplateForLanguage(selectedLanguage) {
    const selectedTemplate = question?.template.find(
      (template) =>
        template.language.toLowerCase() === selectedLanguage.toLowerCase()
    );
    console.log("selectedtemplate", selectedTemplate);
    return selectedTemplate ? selectedTemplate.code : "";
  }
  function handleEditorDidMount(editor, monaco) {
    textareaRef.current = editor;
  }

  const handleRun = async () => {
    setRunLoading(true);
    setOutput("");
    setOutputError("");
    const requestBody = {
      code: textareaRef.current.getValue(),
      language: selectedLanguage.toLocaleLowerCase(),
      id: id,
      authorId: user?.id,
    };
    console.log(requestBody);
    try {
      const response = await fetch(`http://localhost:4000/api/code/run`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(requestBody), // Stringify the request body
      });
      console.log("hello at end");
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setOutput(data?.message);
      } else {
        setOutputError(data?.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setRunLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setOutput("");
    setOutputError("");
    const requestBody = {
      code: textareaRef.current.getValue(),
      language: selectedLanguage.toLocaleLowerCase(),
      id: id,
      authorId: user?.id,
    };
    console.log(requestBody);
    try {
      const response = await fetch(`http://localhost:4000/api/code/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(requestBody), // Stringify the request body
      });
      console.log("hello at end");
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setOutput(data?.message);
        navigate("/problems");
      } else {
        setOutputError(data?.error);
        navigate("/problems");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  if (fetchLoading) {
    return <div className="py-28 px-8">Loading...</div>;
  }

  return (
    <div className="py-28 px-8">
      <div className="flex">
        <div className="w-[40vw] mr-5">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            {question?.number}. {question?.title}
          </h2>
          <p className="mb-5 dark:text-white">{question?.description}</p>
          <div className="flex gap-5">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              {loading ? <Spinner /> : "Submit"}
            </button>
            <button
              onClick={handleRun}
              className="px-6 py-2 bg-emerald-600 text-white rounded-md"
            >
              {runLoading ? <Spinner /> : "Run"}
            </button>
          </div>
          <h6 className="mt-5 text-base font-bold mb-2 dark:text-white">
            Test Cases
          </h6>
          <div className="bg-neutral-800 p-3 rounded-md text-white">
            <div className="flex gap-3 text-sm mb-1">
              <span>Input: </span>
              <div>{question?.testCases[0].input}</div>
            </div>
            <div className="flex gap-3 text-sm">
              <span>Output: </span>
              <div>{question?.testCases[0].output}</div>
            </div>
          </div>

          <h6 className="mt-5 text-base font-bold mb-2 dark:text-white">
            Output
          </h6>
          <div className="bg-neutral-800 min-h-[200px] p-4 rounded-md overflow-hidden">
            {outputError && (
              <p className="text-sm text-red-500">{outputError}</p>
            )}
            {output && <p className="text-sm text-green-500">{output}</p>}
          </div>
        </div>
        <div className="flex-1 relative">
          <select
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="absolute top-1 right-1 z-10 bg-gray-100 outline-none rounded-md text-sm"
          >
            {languages?.map((item) => (
              <option key={item.language} defaultValue={languages[0].language}>
                {item.language}
              </option>
            ))}
          </select>
          <Editor
            height="85vh"
            theme="vs-dark"
            onMount={handleEditorDidMount}
            defaultLanguage="cpp"
            value={getTemplateForLanguage(selectedLanguage)}
          />
        </div>
      </div>
    </div>
  );
};
export default Coading;
