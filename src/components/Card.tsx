import React from 'react'

import Food from 'types/Food'

interface User {
    name: number,
    age: string
}

type AcceptedItems = Food | User


interface CardProps {
    item: AcceptedItems
    title: string
    price: number
}

const Card: React.FC<CardProps> = ({item, title, price, children}) => {
    return (        
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src="images/sample-1.jpg" alt={title}/>
                    <span className="card-title"> {title} </span>
                </div>

                <div className="card-content">
                    {
                        // TODO: Don't know how properly type this moment
                        React.Children.map(children, (child: any) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </div>

                <div className="card-action">
                    Price: {price}
                </div>
            </div>
        </div>
    )
}

export default Card

// Fields
interface CardFieldProps {
    item?: AcceptedItems
    field: keyof AcceptedItems
    label: string
}

const CardField: React.FC<CardFieldProps> = ({item, field, label}) => {
    return (
        <p>{label}: {item![field]}</p>
    )
}

export { CardField }