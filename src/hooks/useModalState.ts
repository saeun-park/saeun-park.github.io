import { useState, useEffect } from 'react';

interface UseModalStateProps {
  onClose: () => void;
  setIsModalOpen: (isOpen: boolean) => void;
  transitionDuration?: number;
}

const useModalState = ({
  onClose,
  setIsModalOpen,
  transitionDuration = 300,
}: UseModalStateProps) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);

    return () => {
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
    };
  }, [setIsModalOpen]);

  const handleClose = () => {
    setIsShowing(false);
    setTimeout(onClose, transitionDuration);
  };

  return { isShowing, handleClose };
};

export default useModalState;
