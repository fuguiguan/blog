import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Avatar } from "./components/avatar/Avatar";
import { Home } from "./views/home/home";

ReactDOM.render(
    // <Hello compiler="TypeScript" framework="React" />,
    <Home />,
    document.getElementById("root")
);
