import { Button, Stack, TextField } from '@mui/material'
import { Coordinates } from 'Forecasts'
import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { getForecasts } from './forecastSlice'

const LocationForm: React.FC = () => {
    const [latitude,setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    
    const dispatch = useAppDispatch();
  
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      const coords: Coordinates = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) }
      dispatch(getForecasts(coords))
    }

    return (
      <form onSubmit={onSubmit}>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" spacing={5} sx={{mx: 'auto', my: 5}}>
          <TextField
            id="latitude"
            name="latitude"
            label="Latitude"
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <TextField
            id="longitude"
            name="longitude"
            label="Longitude"
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <Button variant="contained" disabled={latitude===''||longitude===''} color="primary"type='submit'>
            Get Forecasts
          </Button>
        </Stack>
      </form>
    )
}

export default LocationForm