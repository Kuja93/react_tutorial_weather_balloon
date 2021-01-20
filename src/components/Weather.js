import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div className="weather_body">
                {
                    this.props.country && this.props.city && !this.props.error &&
                    <h2 className={"weather_title"}>{this.props.city}, {this.props.country}</h2>
                }
                {
                    this.props.temperature && !this.props.error &&
                    <p className="weather_result_container">
                        <label className="weather_headers">Temperature</label>:
                        <span className="weather_results">{this.props.temperature}</span>
                        °C
                    </p>
                }
                {
                    this.props.humidity && !this.props.error &&
                    <p className="weather_result_container">
                        <label className="weather_headers">Humidity</label>:
                        <span className="weather_results">{this.props.humidity}</span>
                        %
                    </p>
                }
                {
                    this.props.forecast && !this.props.error &&
                    <p className="weather_result_container">
                        <label className="weather_headers">Forecast</label>:
                        <span className="weather_results">{this.props.forecast}</span>
                    </p>
                }
                {
                    this.props.windSpeed && !this.props.error &&
                    <p className="weather_result_container">
                        <label className="weather_headers">Wind Speed</label>:
                        <span className="weather_results">{this.props.windSpeed}</span>
                        mph
                    </p>
                }
                {
                    this.props.error &&
                    <p className={'weather_result_container weather_result_error'}>
                        <label className="weather_headers">Error</label>:
                        <span className="weather_results">{this.props.error}</span>
                    </p>
                }
            </div>
        );
    }
}

export default Weather;