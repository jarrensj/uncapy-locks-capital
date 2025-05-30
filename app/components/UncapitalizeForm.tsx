'use client';

import { useState } from 'react';

export default function UncapitalizeForm() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleUncapitalize = () => {
    setOutputText(inputText.toLowerCase());
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="w-full space-y-4">
      <textarea
        className="w-full h-32 p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      
      <div className="flex gap-4">
        <button
          onClick={handleUncapitalize}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Uncapitalize
        </button>
      </div>

      {outputText && (
        <div className="space-y-2">
          <div className="p-4 border rounded-lg bg-gray-50">
            <p className="whitespace-pre-wrap">{outputText}</p>
          </div>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
} 