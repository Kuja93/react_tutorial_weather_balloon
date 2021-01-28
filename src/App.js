import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './responsive.css';

import Title from './components/Title';
import Form from "./components/Form";
import Weather from "./components/Weather";

import logo from './resources/image/balloon.gif'

const API_TOKEN = "OPEN WEATHER API KEY GOES HERE";
const UNITS = "metric "; // standard, metric, imperial

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            heading: "Jonny's Weather Balloon",
            subheading: "Jesus, She's Cold Bais",
            defaultCity: "Belfast",
            defaultCountry: "Northern Ireland",
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            forecast: undefined,
            windSpeed: undefined,
            error: undefined
        }
    }

    callWeatherAPI = async (event) => {
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        event.preventDefault(); // stops page refresh as the form would submit

        if(city && country) {
            const call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_TOKEN}&units=${UNITS}`);
            const response = await call.json();

            if(call.ok) {
                this.setState({
                    temperature: response.main.temp,
                    city: response.name,
                    country: response.sys.country,
                    humidity: response.main.humidity,
                    forecast: response.weather[0].description,
                    windSpeed: response.wind.speed,
                    error: ""
                })
            } else {
                this.setState({
                    error: "Error Searching For Entered City/Country"
                })
            }
        } else {
            this.setState({
                error: "Please input search values..."
            })
        }
    };

    render() {
        return (
            <div>
                <div className="card-body">
                    <Title
                        heading={this.state.heading}
                        subheading={this.state.subheading}
                    />
                    <img src={logo} alt="balloon" className={"balloon_gif"}/>
                    <Form
                        loadAPI={this.callWeatherAPI}
                        defaultCity={this.state.defaultCity}
                        defaultCountry={this.state.defaultCountry}
                    />
                    <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        forecast={this.state.forecast}
                        windSpeed={this.state.windSpeed}
                        error={this.state.error}
                    />
                </div>
            </div>
        )
    }
}

export default App;
