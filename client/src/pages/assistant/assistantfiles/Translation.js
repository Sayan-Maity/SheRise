import React from 'react';
import { useState, useEffect } from 'react';
import { IoSend }from "react-icons/io5";

export default function Translation({ doStuff, setInput, result }) {
  const [reloading, setReloading] = useState(false);

  useEffect(() => {
    if (reloading) {
      window.location.reload();
    }
  }, [reloading]);
  return (
    <div className="translation-outer">
      <div className="translation-inner">
        <p className="result-text">{result.length > 0 ? result : 'Answer will be shown here ...'}</p>
        <div className="text-area-write">
          <textarea rows={1} cols={1}
            className="text-area"
            onChange={(e) => setInput(e.target.value)} placeholder="Write your question "
          ></textarea>
          <div className="search-arrow"><IoSend className='translation-search'/></div>
        </div>
        <div className="translation-btn">
          <button className="action-btn" onClick={doStuff}>
            {' '}
            Ask{' '}
          </button>
          <button onClick={() => setReloading(true)} className="action-btn"> Back to Menu </button>
        </div>
      </div>
    </div>
  );
}
