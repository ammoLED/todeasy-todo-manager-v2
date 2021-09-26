import React from 'react'

import Food from 'types/Food'


/* 
    ! https://www.typescriptlang.org/play?jsx=0#code/JYOwLgpgTgZghgYwgAgIIAdgHkBGArCBMAZ2QG8AoZa5ABSgHsCiAucqmz9RgOTgFsIbYmCigA5h2oBfKcgBKEYgwCuUJG0qdOUJQFUoAG2GiJcnQxNiQkzrNkUwAT3QoM2fIRIBpCE9IAvMgA1n4MMGiYuMwkFI4uKLRwYAAWxAA8ACoAfMhBABQM+GyZAJR5uXAgTgDaALpxoJCwiCgA4hBg0UlQAhmZyBAAHpAgACak7tFexL7+uVo0wGNWEgA0cs6uJXLoySlsSakZU55ExDWZddkUDjAqIETADCDI4p3RWYMjEOOTUWcfH5iNl8ntevxiGwOl18D0+llsqU2FUnOwdJ01K8AOROJTY25xBAvETIZSCPJvD74fJkZZsbFjGBM7FrZBbITIABE9CYXi5bL2qTYXN0xAMhi5yGkpSAA

*/
interface User {
    name: number,
    age: string
}

type AcceptedItems =  Food | User


interface CardProps{
    item: any
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
interface FieldProps {
    item?: AcceptedItems
    field: keyof AcceptedItems
    label: string
}

const Field = ({item, field, label}: FieldProps) => {
    return (
        <p>{label}: {item![field]}</p>
    )
}

export { Field }