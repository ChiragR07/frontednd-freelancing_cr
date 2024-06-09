/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Dialog.css'; // Include your CSS file for styling

const Dialog = ({ open: openProp, message, onClose }) => {
  const [open, setOpen] = useState(openProp);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleDialogClick = (e) => {
    e.stopPropagation();
  };

  if (!open) return null;

  console.log(message);

  return (
    <div className="dialog-overlay" onClick={handleClose}>
      <div className="dialog-box" onClick={handleDialogClick}>
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
