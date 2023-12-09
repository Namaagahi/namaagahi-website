import Input from "./input"
import RadioButton from "./radioButton"
import Textarea from "./textarea"

export default function FormControl(props: any) {
  const { control, col, radioOptions, ...rest } = props

  switch(control) {
    case 'input': return <Input col={col} {...rest} />
    case 'textarea': return <Textarea col={col} {...rest} />
    case 'radio': return <RadioButton options={radioOptions} col={col} {...rest} />
      default: return null
  }
}
