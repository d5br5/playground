const useConfirm = (msg = "", onConfirm, onCancel) => {
  const confirmAction = () => {
    if (window.confirm(msg)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

export default useConfirm;
