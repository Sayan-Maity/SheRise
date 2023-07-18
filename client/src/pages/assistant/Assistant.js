import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./assistantfiles/OptionSelction";
import Translation from "./assistantfiles/Translation";
import { arrayItems } from "./assistantfiles/AIOptions.js";
import { useState } from "react";
import "./Assistant.css";
import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CommonPageHelmet, DynamicTitleHelmet } from "../../constants/SEO";

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
          <title>{DynamicTitleHelmet.AssistantPageTitle}</title>
          <meta name="description" content={CommonPageHelmet.description} />
          <meta name="keywords" content={CommonPageHelmet.keywords} />
          <meta property="og:title" content={CommonPageHelmet.ogTitle} />
          <meta
            property="og:description"
            content={CommonPageHelmet.ogDescription}
          />
          <meta property="og:image" content={CommonPageHelmet.ogImage} />
          <meta property="og:url" content={CommonPageHelmet.ogURL} />
          <meta property="og:type" content={CommonPageHelmet.ogType} />
          <meta property="og:site_name" content={CommonPageHelmet.ogSiteName} />
          <meta property="og:locale" content={CommonPageHelmet.ogLocale} />
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
