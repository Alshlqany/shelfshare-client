const FormContainer = ({ title, children }) => {
  return (
    <div className="p-10 md:p-20 w-full h-screen flex flex-col justify-center md:bg-white lg:p-30">
      <h1 className="text-3xl font-bold text-[#2C9DB7] mb-2 md:mb-6 ">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default FormContainer;
