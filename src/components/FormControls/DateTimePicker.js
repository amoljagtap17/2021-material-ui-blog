import { useField } from 'formik'
import { TextField } from '@material-ui/core'

export const DateTimePicker = ({ name, ...props }) => {
  const [field, meta] = useField(name)

  const config = {
    ...field,
    ...props,
    type: 'date',
    fullWidth: true,
    variant: 'outlined',
    InputLabelProps: {
      shrink: true,
    },
  }

  if (meta && meta.touched && meta.error) {
    config.error = true
    config.helperText = meta.error
  }

  return <TextField {...config} />
}
