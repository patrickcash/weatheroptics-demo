import React from 'react';
import './App.css';

import { AppBar, Container, Toolbar, Typography } from '@mui/material';

import LocationForm from './features/forecasts/LocationForm';
import ForecastTable from './features/forecasts/ForecastTable';


function App() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4" component="div">
            WeatherOptics Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
            <LocationForm />
            <ForecastTable />
        </Container>
      </main>
    </>
  );
}

export default App;
