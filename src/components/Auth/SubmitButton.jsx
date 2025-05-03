const SubmitButton = ({ disabled, children }) => {
  return (
    <button
      type="submit"
      className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-[#238ca3] cursor-pointer transition duration-300 disabled:bg-gray-500 disabled:cursor-progress"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
