import { TextField, MenuItem } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

const data = {
  IN: 'India',
  BT: 'Bhutan',
  AR: 'Argentina',
  DZ: 'Algeria',
}

export const Select = ({ name, options = data, ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (event) => {
    const { value } = event.target
    setFieldValue(name, value)
  }

  const config = {
    ...field,
    ...props,
    select: true,
    fullWidth: true,
    variant: 'outlined',
    onChange: handleChange,
  }

  if (meta && meta.touched && meta.error) {
    config.error = true
    config.helperText = meta.error
  }

  return (
    <>
      <TextField {...config}>
        {Object.keys(options).map((item, pos) => {
          return (
            <MenuItem key={pos} value={item}>
              {options[item]}
            </MenuItem>
          )
        })}
      </TextField>
    </>
  )
}
