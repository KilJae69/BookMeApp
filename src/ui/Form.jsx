function Form({children, onSubmit,variation = "primary"}) {

    const base = "relative";

    const styles = {
      primary: base + " space-y-6",
      search: base + " flex items-center flex-1",
    };


    return <form  noValidate onSubmit={onSubmit} className={styles[variation]}>
{children}
    </form>;
}

export default Form
