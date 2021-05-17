import { Button as MUIButton } from '@material-ui/core'
import { useFormikContext } from 'formik'

export const Button = ({ children, ...props }) => {
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  const config = {
    ...props,
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  }

  return <MUIButton {...config}>{children}</MUIButton>
}
