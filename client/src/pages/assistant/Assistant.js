import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./assistantfiles/OptionSelction";
import Translation from "./assistantfiles/Translation";
import { arrayItems } from "./assistantfiles/AIOptions.js";
import { useState } from "react";
import "./Assistant.css";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      <Helmet>
        <title>SheRise | AI Assistant</title>
        <meta
          name="description"
          content="SheRise provides user with AI Assistant to help them with their career.  "
        />
        <meta
          name="keywords"
          content="AI Assistant, Help, Support, Career, Tech, Opportunities, Job Listings"
        />
      </Helmet>
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
