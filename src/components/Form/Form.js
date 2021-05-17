import { Grid, Typography, Box } from '@material-ui/core'
import { Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'
import {
  TextField,
  Select,
  DateTimePicker,
  Checkbox,
  Button,
} from 'components/FormControls'

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: false,
}

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Phone is required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  country: Yup.string().required('Country is required'),
  arrivalDate: Yup.date().required('Arrival Date is required'),
  departureDate: Yup.date().required('Departure Date is required'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted')
    .required('The terms and conditions must be accepted'),
})

export const Form = () => (
  <Formik
    initialValues={{ ...INITIAL_FORM_STATE }}
    validationSchema={FORM_VALIDATION}
    onSubmit={(values) => {
      console.log('values : ', values)
    }}
  >
    <FormikForm>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Your Details</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField name="firstName" label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="lastName" label="Last Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="email" label="Email" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="phone" label="Phone" />
        </Grid>
        <Grid item xs={12}>
          <Typography>Address</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField name="addressLine1" label="Address Line 1" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="addressLine2" label="Address Line 2" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="city" label="City" />
        </Grid>
        <Grid item xs={6}>
          <TextField name="state" label="State" />
        </Grid>
        <Grid item xs={12}>
          <Select name="country" label="Country" />
        </Grid>
        <Grid item xs={12}>
          <Typography>Booking Information</Typography>
        </Grid>
        <Grid item xs={6}>
          <DateTimePicker name="arrivalDate" label="Arrival Date" />
        </Grid>
        <Grid item xs={6}>
          <DateTimePicker name="departureDate" label="Departure Date" />
        </Grid>
        <Grid item xs={12}>
          <TextField name="message" label="Message" multiline={true} rows={4} />
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            name="termsOfService"
            legend="Terms of Service"
            label="I agree"
          />
        </Grid>
        <Grid item xs={12}>
          <Button>Submit</Button>
        </Grid>
      </Grid>
      <Box m={4} style={{ height: 50 }} />
    </FormikForm>
  </Formik>
)
