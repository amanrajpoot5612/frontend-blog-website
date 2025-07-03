import { useState } from "react";

const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 px-2 py-1 text-xs border border-yellow-400 rounded hover:bg-yellow-200 dark:hover:bg-yellow-100 transition"
    >
      {copied ? "Copied!" : `Copy ${label}`}
    </button>
  );
};

const DemoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-yellow-100 dark:bg-yellow-300 text-yellow-900 px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-b border-yellow-300">
      <div className="text-sm sm:text-base font-medium text-center sm:text-left flex flex-col sm:flex-row items-center gap-2">
        <p>
          <span className="font-semibold">Demo Account <span className="text-red-600">(Use these credentials for faster access)</span>:</span> Email: <span className="font-mono">demo@example.com</span>
        </p>
        <CopyButton text="demo@example.com" label="Email" />
        <p>
          Password: <span className="font-mono">Demo@123</span>
        </p>
        <CopyButton text="Demo@123" label="Password" />
      </div>
      <button
        onClick={() => setVisible(false)}
        className="mt-2 sm:mt-0 text-sm px-3 py-1 border border-yellow-400 rounded hover:bg-yellow-200 dark:hover:bg-yellow-100 transition"
      >
        Hide
      </button>
    </div>
  );
};

export default DemoBanner;
