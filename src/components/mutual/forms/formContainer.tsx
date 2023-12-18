'use client'

import { Form, Formik } from "formik"
import FormControl from "./formControl"
import { MdOutlineSendToMobile } from "react-icons/md"
import * as Yup from 'yup'

type Props = {
  initialValues: JoinUsFormData
  validationSchema: Yup.ObjectSchema<{
        firstName: string;
        lastName: string;
        idCode: string;
        phone: string;
        email: string;
        field: string;
    }, Yup.AnyObject, {
        firstName: undefined;
        lastName: undefined;
        idCode: undefined;
        phone: undefined;
        email: undefined;
        field: undefined;
    }, "">
  onSubmit: (values: any) => void
  controls: FormDataControls[]
  submitText: string
  radioOptions: FromRadioOptions
}

export default function FormContainer(props: Props) {
  const { initialValues, validationSchema, onSubmit, controls, submitText, radioOptions } = props

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form className="w-full grid grid-cols-2 gap-7">
            {controls.map((item) => (
              <FormControl
                key={item.id}
                control={item.control}
                type={item.type}
                label={item.label}
                name={item.name}
                col={item.col}
                radioOptions={radioOptions}
              />
            ))}
            <button
              type="submit"
              className={`col-span-2 py-2 px-5 rounded-lg bg-[#54595F] w-[80%] md:w-[30%] mx-auto font-bold flex justify-center items-center gap-2 ${(formik.dirty && formik.isValid) && 'hover:bg-[#5F276E]'}  transition-colors`}
              disabled={!(formik.dirty && formik.isValid)}
            >
              <MdOutlineSendToMobile className='hover:animate-pulse' />
              {submitText}
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
