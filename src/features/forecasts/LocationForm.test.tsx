import { render, screen, fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from '../../app/store';

import LocationForm from "./LocationForm";

test('Get Forecasts button is disabled on initial render', () => {
    render(
      <Provider store={store}>
        <LocationForm />
      </Provider>
    );
    
    expect(screen.getByRole('button', { name: /get forecasts/i })).toBeDisabled();
});

test('when a latitide and longitude are entered the Get Forecasts button is enabled',  () => {
    render(
      <Provider store={store}>
        <LocationForm />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText(/latitude/i), { target: { value: 35.05}});
    fireEvent.change(screen.getByLabelText(/longitude/i), { target: { value: -78.87}});

    expect(screen.getByRole('button', { name: /get forecasts/i })).toBeEnabled();
});
