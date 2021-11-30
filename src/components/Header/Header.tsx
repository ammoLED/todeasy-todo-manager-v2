import React from "react";
import { useLocation } from "react-router-dom";

import "./Header.scss";
import Progress from "components/Progress";
import ButtonBack from "components/ButtonBack";
import { useTypedSelector } from "hooks";
import { CATEGORIES_ROUTE } from "pages/routes";


const Header: React.FC = () => {

    const location = useLocation()
    const { pageName } = useTypedSelector(state => state.app)
    
    const categories = useTypedSelector(state => state.categories)
    const category = categories.find(category => category.title === pageName)
    
    const buttonBack = (location.pathname !== CATEGORIES_ROUTE) ? <ButtonBack/> : null
    const progress   = category ? <Progress array={category.tasks} field={"completed"} /> : null


    return (
        <header className="header">
            { buttonBack }

            <h1> {pageName} </h1>

            {progress}
        </header>
    )
}

export default Header
