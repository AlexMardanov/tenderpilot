import React from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const styles = () => ({
  card: {
    maxWidth: 520,
    marginTop: 50,
    padding: 20,
  },
  container: {
    display: 'Flex',
    justifyContent: 'center',
  },
  actions: {
    float: 'right',
  },
})

const form = props => {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card} raised>
          <CardContent>
            <TextField
              id="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name ? errors.name : ''}
              error={touched.name && Boolean(errors.name)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="number"
              label="Number"
              type="text"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.number ? errors.number : ''}
              error={touched.number && Boolean(errors.number)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="unit"
              label="Unit"
              type="text"
              value={values.unit}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.unit ? errors.unit : ''}
              error={touched.unit && Boolean(errors.unit)}
              margin="dense"
              variant="outlined"
              fullWidth
            />

            <TextField
              id="packageUnit"
              label="Package Unit"
              type="text"
              value={values.packageUnit}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.packageUnit ? errors.packageUnit : ''}
              error={touched.packageUnit && Boolean(errors.packageUnit)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="description"
              label="Description"
              type="text"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.description ? errors.description : ''}
              error={touched.description && Boolean(errors.description)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" disabled={isSubmitting} variant="contained">
              SUBMIT
            </Button>
            <Button color="secondary" onClick={handleReset} variant="outlined">
              CLEAR
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  )
}

form.propTypes = {
  classes: PropTypes.object,
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func,
}

const Form = withFormik({
  mapPropsToValues: ({
    name,
    number,
    unit,
    packageUnit,
    description,
    category,
    updatedBy,
    deleted,
    created,
    updated,
  }) => ({
    name: name || '',
    number: number || '',
    unit: unit || '',
    packageUnit: packageUnit || '',
    description: description || '',
    category: category || '/api/categories/2',
    updatedBy: updatedBy || 10,
    deleted: deleted || false,
    created: created || '2019-12-11T14:17:21.537Z',
    updated: updated || '2019-12-11T14:17:21.537Z',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.number()
      .min(9999, 'Must contain at least 5 characters')
      .required('Required'),
    unit: Yup.number().required('Required'),
  }),

  handleSubmit: (values, { setSubmitting, props: { handleCreateProduct } }) => {
    setTimeout(() => {
      handleCreateProduct(values)
      setSubmitting(false)
    }, 1000)
  },
})(form)

export default withStyles(styles)(Form)
