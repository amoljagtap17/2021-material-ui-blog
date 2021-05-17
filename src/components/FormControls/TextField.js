import { TextField as MUITextField } from '@material-ui/core'
import { useField } from 'formik'

export const TextField = ({ name, ...props }) => {
  const [field, meta] = useField(name)

  const config = {
    ...field,
    ...props,
    fullWidth: true,
    variant: 'outlined',
  }

  if (meta && meta.touched && meta.error) {
    config.error = true
    config.helperText = meta.error
  }

  return <MUITextField {...config} />
}
