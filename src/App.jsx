import React from "react";
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

export const App = ({options, byPassTimeoutOptions}) => {
    return (
        <div>
            <ComboBox
                allowFreeform={true}
                autoComplete={true}
                options={options}
            />
            <ComboBox
                allowFreeform={true}
                autoComplete={true}
                options={byPassTimeoutOptions}
            />
            <Dropdown options={options} />
        </div>
    );
};
