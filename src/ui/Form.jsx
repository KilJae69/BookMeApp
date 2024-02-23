function Form({children, onSubmit}) {
    return <form onSubmit={onSubmit} className="relative space-y-6">
{children}
    </form>;
}

export default Form
