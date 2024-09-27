// Modal.tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white p-5 rounded-lg shadow-lg z-10 w-full max-w-lg h-auto">
        {" "}
        {/* Increased width */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl" // Increased size of the close button
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
