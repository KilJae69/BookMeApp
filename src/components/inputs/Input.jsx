const Input = ({
  id,
  name,
  label,
  disabled,
  errors,
  type = "text",
  register,
  validationRules,
  onBlur,
  variation = "primary"
}) => {

  const base =
    "p-3 pt-5 peer w-full text-sm font-light bg-white outline-none transition disabled:opacity-70 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " border-2 rounded-md ",
    search: base + " focus:ring-2 focus:ring-rose-200 rounded-md ",
  }

  const {ref,onBlur:formOnBlur,...rest} = register(id, validationRules);
  const handleBlur = (e) => {
    formOnBlur(e);
    onBlur && onBlur(e);
  }

  return (
    <div className="w-full relative">
      <input
        {...rest}
        onBlur={handleBlur}
        ref={ref}
        id={id}
        name={name}
        disabled={disabled}
        placeholder=" "
        type={type}
        className={`${styles[variation]}
          ${errors && errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${
            errors && errors[id]
              ? "focus:border-rose-500"
              : "focus:border-rose-200"
          }`}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm duration-150 transform -translate-y-3 left-5 top-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors && errors[id] ? "text-rose-500" : "text-zinc-400"
        }`}
      >
        {label}
      </label>
      {errors && errors[id] && (
        <p className="text-red-500 text-xs mt-1">{errors[id].message}</p>
      )}
    </div>
  );
};

export default Input;
