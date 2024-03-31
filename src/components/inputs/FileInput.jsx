const FileInput = ({ label, id, onChange, disabled, accept, className }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center border-b-[1px] py-2 gap-4">
      <span className="sr-only">Choose profile photo</span>
      <label
        htmlFor={id}
        className="min-w-[30%] text-sm font-medium text-textPrimary700 dark:text-textPrimaryDark"
      >
        {label}
      </label>

      <input
        accept={accept}
        id={id}
        type="file"
        onChange={onChange}
        className={` disabled:opacity-50 disabled:cursor-not-allowed flex-1 w-full shadow-sm focus:ring-2 focus:ring-lightOutline dark:text-white dark:focus:ring-darkOutline focus:outline-none text-sm border-[1px] border-gray-300 rounded-md xl:max-w-[34%] file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0 file:cursor-pointer
      file:text-sm file:font-semibold
      file:bg-rose-50 dark:file:bg-fuchsia-50 file:text-primary600 dark:file:text-primaryDark600
      hover:file:bg-rose-100 dark:hover:file:bg-fuchsia-100 ${className}`}
        disabled={disabled}
      />
    </div>
  );
};

export default FileInput;
