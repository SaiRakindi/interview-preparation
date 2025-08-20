import { useState } from "react";
import "./styles.css";

function CopyClipboard() {
  const [formValue, setFormValue] = useState("");
  const [showError, setShowError] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const [copiedText, setCopiedText] = useState("");

  function handleCopy(value) {
    if (!value || !value.trim()) {
      setShowError(true);

      setShowCopied(false);

      setTimeout(() => {
        setShowError(false);
      }, 2000);
    } else {
      setShowError(false);
      navigator.clipboard.writeText(value);
      setCopiedText(value);
      setShowCopied(true);

      setTimeout(() => {
        setShowCopied(false);
      }, 2000);
    }
  }

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={formValue}
              onChange={(event) => setFormValue(event.target.value)}
            />
          </label>
          <button
            onClick={() => {
              handleCopy(formValue);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
        </div>

        {showCopied && <p data-testid="copied-message"> Copied!</p>}

        <p data-testid="error-message">
          {showError ? "Type some values to copy" : ""}
        </p>
      </div>
    </div>
  );
}

export default CopyClipboard;
