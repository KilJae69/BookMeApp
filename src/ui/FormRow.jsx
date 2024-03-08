import Label from "./Label";

function FormRow({label,error,children,labelVariation,inputId}) {
    return (
      <div>
        {label && <Label variation={labelVariation} htmlFor={inputId}>{label}</Label>}
        <div className="mt-2">
          {children} 
        </div>
        {{error} && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
}

export default FormRow
