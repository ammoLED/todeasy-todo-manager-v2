import React from "react"

import "./GradientSelector.scss"
import { useTypedSelector } from "hooks"
import { Gradient } from "types"

interface Props {
    className?: string
    selectedGradientId: Gradient["id"]
    onSelectGradient: (gradient: Gradient) => void
}

const GradientSelector: React.FC<Props> = ({ className = '', selectedGradientId, onSelectGradient }) => {

    const gradients = useTypedSelector(state => state.app.customGradients)

    return (
        <div className={`${className} gradient-selector`}>
            {gradients.map(gradient => {

                const isChecked = selectedGradientId === gradient.id

                return (
                    <label 
                        key={gradient.id}
                        className="gradient-selector__radio-gradient radio-gradient" 
                        onChange={() => onSelectGradient(gradient)}
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