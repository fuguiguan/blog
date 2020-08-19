import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Avatar } from "./components/avatar/Avatar";

ReactDOM.render(
    // <Hello compiler="TypeScript" framework="React" />,
    <Avatar  url="https://via.placeholder.com/150/771796" name="那个少年"/>,
    document.getElementById("root")
);
