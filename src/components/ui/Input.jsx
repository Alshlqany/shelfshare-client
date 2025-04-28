const Input = ({
  id,
  name,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  children,
}) => {
  const isError = touched && error;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div
        className={`flex border p-1 ${
          isError ? "border-red-500" : "border-gray-300"
        } rounded-lg focus-within:ring-2 focus-within:ring-[#2C9DB7] focus-within:border-transparent`}
      >
        <input
          id={id}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          className="w-full h-full outline-none px-3 py-2"
        />
        {children}
      </div>
      {isError && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
