import React from 'react';
import {render} from '@testing-library/react';
import Form from '../Form.js'

const testString = "test123";

const setup = (defaultValue = null, onSubmit = null) =>
    render(
        <Form defaultValue={defaultValue} onSubmit={onSubmit}/>
    );

describe('Form', () => {
    test('Render Form with no props', () => {
        const {getByTestId} = setup(null, null);
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

    test('Render Form with default values', () => {
        const {getByTestId} = setup(testString, null);
        expect(getByTestId('form_city').textContent).toMatch(
            testString
        );
    });
});

