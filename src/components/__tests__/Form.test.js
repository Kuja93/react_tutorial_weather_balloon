import React from 'react';
import {render} from '@testing-library/react';
import Form from '../Form.js'

const testString = "test123";

const setup = (loadAPI = null, defaultCity = null, defaultCountry = null) =>
    render(
        <Form
            loadAPI={loadAPI}
            defaultCity={defaultCity}
            defaultCountry={defaultCountry}
        />
    );

describe('Form', () => {
    test('Render Form with no props', () => {
        const {getByTestId} = setup();
        expect(getByTestId('form_city').className).toMatch(
            'weather_input'
        );
        expect(getByTestId('form_country').className).toMatch(
            'weather_input'
        );
        expect(getByTestId('form_button').className).toMatch(
            'weather_button'
        );
    });
});

