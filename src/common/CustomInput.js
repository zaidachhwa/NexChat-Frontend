export const CustomInput = ({
  label,
  type,
  placeholder,
  register,
  registerName,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(registerName)}
        className="w-full outline-0 border border-bordergreen p-2 pl-4 rounded-lg placeholder:text-fontgreen focus:ring-2 focus:ring-fontgreen transition-all duration-300"
      />
      {errors && (
        <span className="text-red-500 text-sm ">
          {errors[registerName]?.message}
        </span>
      )}
    </div>
  );
};
