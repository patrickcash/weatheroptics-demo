import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { Provider } from "react-redux";
import { store } from './app/store';

import App from './App';

test('location form is shown when app launches', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const latitudeElement = screen.getByLabelText(/latitude/i);
  const longitudeElement = screen.getByLabelText(/longitude/i);

  expect(latitudeElement).toBeInTheDocument();
  expect(longitudeElement).toBeInTheDocument();
});

test('forecast data is returned to datagrid after lat and long are entered and button clicked', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/latitude/i), { target: { value: 35.05}});
    fireEvent.change(screen.getByLabelText(/longitude/i), { target: { value: -78.87}});
    fireEvent.click(screen.getByText(/get forecasts/i));


    await waitFor(() => {
      // grid is added to the screen when data is returned
      expect(screen.getByRole('grid')).toBeInTheDocument();
    });
    
    await waitFor(() => {
      // 10 columns in forecast: (Time, Temp, Humidity, Heat index, Visibility, Wind Gust, Wind Speed, Precipitation, Rainfall Rate, Snowfall Rate)
      expect(screen.getByRole('grid')).toHaveAttribute("aria-colcount", "10");
    });

    await waitFor(() => {
      // 7 days * 24 hours in a day = 168 forecast rows
      expect(screen.getByRole('grid')).toHaveAttribute("aria-rowcount", "168");
    });
  });