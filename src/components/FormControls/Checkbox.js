import {
  Checkbox as MUICheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

export const Checkbox = ({ name, label, legend, ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (event) => {
    const { checked } = event.target
    setFieldValue(name, checked)
  }

  const config = {
    ...field,
    ...props,
    onChange: handleChange,
  }

  const configFormControl = {}

  if (meta && meta.touched && meta.error) {
    configFormControl.error = true
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel control={<MUICheckbox {...config} />} label={label} />
      </FormGroup>
    </FormControl>
  )
}
