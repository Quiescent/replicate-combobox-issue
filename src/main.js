import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";

(global => {
    ReactDOM.render(
        (<AppContainer test={1} />),
        document.getElementById("root")
    );
})(window);
