import { Box, Grid } from '@mui/material'
import { Locality } from '../../../redux/localityReducer'
import { DataValue, Grouped } from '../../DetailView/common/FormComponents'
import { useGetEditableTextField } from '../../DetailView/hooks'
import { ReactNode } from 'react'

const ArrayToTable = ({ array }: { array: Array<Array<ReactNode>> }) => (
  <Grid container direction="row">
    {array.map(row => (
      <Grid container direction="row" height="2.5em">
        {row.map((item, index) => (
          <Grid key={index} item xs={2} padding="5px">
            {item}
          </Grid>
        ))}
      </Grid>
    ))}
  </Grid>
)

const Age = () => {
  const getEditableTextField = useGetEditableTextField<Locality>()

  const valueField = (field: keyof Locality) => (
    <DataValue<Locality> field={field as keyof Locality} editElement={getEditableTextField} />
  )

  const arr = [
    ['Dating method', valueField('date_meth')],
    ['Age (Ma)', 'Basis for age (Absolute)', 'Basis for age (Time Unit)', 'Basis for age (Fraction)'],
    ['Minimum age', valueField('bfa_min_abs'), valueField('bfa_min'), valueField('frac_min')],
    ['Maximum age', valueField('bfa_max_abs'), valueField('bfa_max'), valueField('frac_max')],
    ['Chronostrathigraphic age', valueField('chron')],
    ['Age Comment', valueField('age_comm')],
  ]

  return (
    <Grouped title="Age">
      <ArrayToTable array={arr} />
    </Grouped>
  )
}

const Lithostratigraphy = () => {
  const getEditableTextField = useGetEditableTextField<Locality>()

  const valueField = (field: keyof Locality) => (
    <DataValue<Locality> field={field as keyof Locality} editElement={getEditableTextField} />
  )

  const arr = [
    ['Group', valueField('lgroup')],
    ['Formation', valueField('formation')],
    ['Member', valueField('member')],
    ['Bed', valueField('bed')],
  ]

  return (
    <Grouped title="Lithostratigraphy">
      <ArrayToTable array={arr} />
    </Grouped>
  )
}

const SampleUnit = () => {
  const getEditableTextField = useGetEditableTextField<Locality>()

  const valueField = (field: keyof Locality) => (
    <DataValue<Locality> field={field as keyof Locality} editElement={getEditableTextField} />
  )

  const arr = [
    ['Datum Plane', valueField('datum_plane')],
    ['Top of Sample Unit(m)', valueField('tos')],
    ['Bottom of Sample Unit (m)', valueField('bos')],
  ]

  return (
    <Grouped title="Lithostratigraphy">
      <ArrayToTable array={arr} />
    </Grouped>
  )
}

const BasinInformation = () => {
  const getEditableTextField = useGetEditableTextField<Locality>()

  const valueField = (field: keyof Locality) => (
    <DataValue<Locality> field={field as keyof Locality} editElement={getEditableTextField} />
  )

  const arr = [
    ['Basin', valueField('basin')],
    ['Subbasin', valueField('subbasin')],
  ]

  return (
    <Grouped title="Lithostratigraphy">
      <ArrayToTable array={arr} />
    </Grouped>
  )
}
export const AgeTab = () => {
  return (
    <Box>
      <Age />
      <Lithostratigraphy />
      <SampleUnit />
      <BasinInformation />
    </Box>
  )
}
