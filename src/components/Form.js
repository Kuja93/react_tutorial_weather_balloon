import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form className="form" onSubmit={this.props.loadAPI}>
                <input
                    className={"weather_input"}
                    type="text"
                    name="city"
                    placeholder="City..."
                    defaultValue={this.props.defaultCity}
                    data-testid="form_city"
                />
                <br/>
                <input
                    className={"weather_input"}
                    type="text" name="country"
                    placeholder="Country..."
                    defaultValue={this.props.defaultCountry}
                    data-testid="form_country"
                />
                <div className={"weather_buttons_container"}>
                    <button
                        type="submit"
                        className={'btn btn-primary weather_button'}
                        data-testid="form_button"
                    >
                        Get Weather
                    </button>
                </div>
            </form>
        );
    }
}

export default Form;