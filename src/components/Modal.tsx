import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-8 max-w-sm w-full relative shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {title && <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>}
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times; {/* Close icon */}
        </button>
      </div>
    </div>
  );
};

export default Modal;
