import React, { useState } from "react";
import "./index.css";

function ConfirmationModal() {
  const [userAction, setUserAction] = useState(false);

  const [userChoice, setUserChoice] = useState(null);

  return (
    <div className="modal-container">
      <button
        className="open-modal-btn"
        onClick={() => setUserAction((prev) => !prev)}
        data-testid="open-modal-button"
      >
        Open Confirmation Modal
      </button>

      {userAction && (
        <div className="modal-backdrop" data-testid="confirmation-modal">
          <div className="modal-box">
            <h2 className="modal-title" data-testid="modal-title">
              Confirm Action
            </h2>
            <p className="modal-message" data-testid="modal-message">
              Are you sure you want to proceed?
            </p>

            <div className="modal-buttons">
              <button
                className="confirm-btn"
                onClick={() => {
                  setUserChoice("Confirmed");
                  setUserAction(false);
                }}
                data-testid="confirm-button"
              >
                Confirm
              </button>
              <button
                className="cancel-btn"
                onClick={() => {
                  setUserChoice("Cancelled");
                  setUserAction(false);
                }}
                data-testid="cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="action-status" data-testid="action-status">
        {userChoice}
      </div>
    </div>
  );
}

export default ConfirmationModal;
