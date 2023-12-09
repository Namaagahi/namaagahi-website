import { ErrorMessage, Field } from "formik"
import FormTextError from "./formTextError"
import React from "react"

export default function RadioButton(props: any) {
  const { label, name, options, ...rest } = props

  return (
    <div className="flex flex-col items-start gap-x-4">
      <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium  dark:text-gray-300">
        {label}
      </label>
      <Field name={name} {...rest}>
        {({field}: any) => {
          return (
            options.map((option: any) => (
              <div key={option.id} className='flex items-center gap-2'>
                <input
                  type="radio"
                  className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700  outline-none"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={option.value}
                />
                <label htmlFor={option.value}>
                  {option.value}
                </label>
              </div>
            ))
          )
        }}
      </Field>
      <ErrorMessage name={name} component={FormTextError}/>
    </div>
  )
}
