import React from "react"

import "./GradientSelector.scss"
import { useTypedSelector } from "hooks"
import { Gradient } from "types"

interface Props {
    className?: string
    activeGradientId: Gradient["id"]
    setGradient: (gradient: Gradient) => void
}

const GradientSelector: React.FC<Props> = ({ className = '', activeGradientId, setGradient }) => {

    const gradients = useTypedSelector(state => state.app.customGradients)

    return (
        <div className={`gradient-selector ${className}`}>
            {gradients.map(gradient => {

                const isChecked = activeGradientId === gradient.id

                return (
                    <label 
                        key={gradient.id}
                        className="gradient-selector__radio-gradient radio-gradient" 
                        onChange={() => setGradient(gradient)}
                    >
                        <input type="radio" name="gradient" defaultChecked={isChecked}/>

                        <div 
                            style={{
                                background: `linear-gradient(
                                    135deg, ${gradient.startColor} 0%, 
                                    ${gradient.endColor} 100%
                                )`
                            }}
                        ></div>
                    </label>
                )

            })}
        </div>
    )
}

export default GradientSelector