import "./Header.scss";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useTypedSelector } from "hooks";
import { CATEGORIES_ROUTE } from "pages/routes";
import CategoryProgress from "components/CategoryProgress";
import ButtonBack from "components/ButtonBack";

const Header: React.FC = () => {

    const location = useLocation()
    const { pageName } = useTypedSelector(state => state.app)
    
    const categories = useTypedSelector(state => state.categories)
    
    
    const buttonBack = (location.pathname !== CATEGORIES_ROUTE) ? <ButtonBack/> : null

    return (
        <header className="header">
            { buttonBack }
            <h1> {pageName} </h1>
            <CategoryProgress category={{tasks: [], title: ""}} />
        </header>
    )
}

export default Header
