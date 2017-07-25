import React from "react";
import { App } from "./App";
import autoBind from "react-autobind";

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({options: [
            {key: "a", text: "Key-a"},
            {key: "b", text: "Key-b"}]}),
                   1000);
    }

    render() {
        return (<App
                    options={this.state.options}
                    byPassTimeoutOptions={[{key: "a", text: "Key-a"},
                                           {key: "b", text: "Key-b"}]}/>);
    }
}

export default AppContainer;
