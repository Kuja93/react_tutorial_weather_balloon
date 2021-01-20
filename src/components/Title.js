import React from "react";

class Title extends React.Component {
    render() {
        return (
            <div className="title_container">
                <h1>{this.props.heading}</h1>
                <h4>{this.props.subheading}</h4>
            </div>
        );
    }
}

export default Title;