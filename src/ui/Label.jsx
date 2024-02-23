function Label({children,htmlFor,variation="primary"}) {
  const base = "block text-sm font-medium leading-6 text-gray-900";

  const styles = {
    primary: base,
    form: base,
    hidden: "sr-only",
  }


    return (
      <label
        htmlFor={htmlFor}
        className={styles[variation]}
      >
        {children}
      </label>
    );
}

export default Label
