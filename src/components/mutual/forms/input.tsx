import { ErrorMessage, Field } from "formik"
import FormTextError from "./formTextError"

export default function Input(props: any) {
  const { label, name, col, ...rest } = props

  return (
    <div className={`flex flex-col gap-y-1 col-span-${col}`}>
      <Field
        className="text-black text-sm md:text-base outline-none py-2 px-5 rounded-md bg-[#F5F5F5] border border-[#E1E1E1] focus:border-2 focus:border-blue-500 focus:ring-blue-500"
        id={name}
        name={name}
        placeholder={label}
        {...rest}
      />
      <ErrorMessage name={name} component={FormTextError}/>
    </div>
  )
}
