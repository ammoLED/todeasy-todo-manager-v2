import "./Header.scss";
import React, {} from "react";
import { useLocation } from "react-router-dom";

import { useTypedSelector } from "hooks";
import { CATEGORIES_ROUTE } from "pages/routes";
import Progress from "components/Progress";
import ButtonBack from "components/ButtonBack";
import ProgressToday from "components/ProgressToday/ProgressToday";

const Header: React.FC = () => {

    const location = useLocation()
    const { pageName } = useTypedSelector(state => state.app)
    
    const categories = useTypedSelector(state => state.categories)
    const category = categories.find(cat => cat.title === pageName)
    
    const buttonBack = (location.pathname !== CATEGORIES_ROUTE) ? <ButtonBack/> : null
    const progress   = category ? <Progress tasks={category.tasks} /> : <ProgressToday/>

    return (
        <header className="header">
            { buttonBack }

            <h1> {pageName} </h1>

            {progress}
        </header>
    )
}

export default Header
