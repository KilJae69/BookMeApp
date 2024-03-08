function Form({children, onSubmit}) {
    return <form  noValidate onSubmit={onSubmit} className="relative space-y-6">
{children}
    </form>;
}

export default Form
