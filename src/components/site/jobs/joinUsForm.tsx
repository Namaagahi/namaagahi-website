'use client'
import FormContainer from '@/components/mutual/forms/formContainer'
import * as Yup from 'yup'

export default function JoinUsForm(props: any) {
  const { data } = props

  const initialValues: JoinUsFormData = {
    firstName: '',
    lastName: '',
    idCode: '',
    phone: '',
    email: '',
    introMethod: '',
    description: '',
    radioOption: ''
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required(data.errorMessages['name']),
    lastName: Yup.string().required(data.errorMessages['lastName']),
    idCode: Yup.string().required(data.errorMessages['idCode']),
    phone: Yup.string().required(data.errorMessages['phone']),
    email: Yup.string().email().required(data.errorMessages['email']),
    field: Yup.string().required(data.errorMessages['field']),
  })

  const onSubmit = (values: any) => console.log("FORM DATA", values)

  return (
    <FormContainer
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      controls={data.controls}
      radioOptions={data.radioOptions}
      submitText={data.submitText}
    />
  )
}

