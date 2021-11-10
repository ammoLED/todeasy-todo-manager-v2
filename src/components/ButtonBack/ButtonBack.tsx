import React from "react"
import { useHistory } from "react-router"

import "./ButtonBack.scss"
import { ReactComponent as SVGArrow } from "assets/svg/Arrow.svg"

const ButtonBack: React.FC = () => {
    const history = useHistory()

    return (
        <button 
            className="btn btn-back"
            onClick={history.goBack}
        >
            <SVGArrow/>
        </button>
    )
}

export default ButtonBack