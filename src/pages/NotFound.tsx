import React from "react";
import { Redirect } from "react-router";

import { PROJECTS_ROUTE } from "./routes";

const NotFound: React.FC = () => {
    return (
        <Redirect to={PROJECTS_ROUTE} />
    )
}

export default NotFound
