import React from 'react'

import Food from 'types/Food'

import cardPlaceholder from 'assets/images/card-placeholder.gif'
/* 
    ! 2 объекты и ключи) https://www.typescriptlang.org/play?jsx=0#code/JYOwLgpgTgZghgYwgAgIIAdgHkBGArCBMAZ2QG8AoZa5ABSgHsCiAucqmz9RgOTgFsIbYmCigA5h2oBfKcgBKEYgwCuUJG0qdOUJQFUoAG2GiJcnQxNiQkzrNkUwAT3QoM2fIRIBpCE9IAvMgA1n4MMGiYuMwkFBSgkLCIKADiEGDRtHBQAsQAPAAqyBAAHpAgACak7tFexL7+AHzsnMAVVhIANHLOrmwFcuhwYAAWbKFO4ZEeMcQA2gUAuhQOMCogRMAMIMji6dGFxWUQldVRnkT1fsSNABRDOfzEbGkZ+FmP+QWNAJRscCAnC0aLowGodgByJxKCErOIIbYiZDKQTIIJ7N54W5kNpsCEVGAEiGdZC9ITIABEimUaiQFJJQ1GbApumIBkMFOQ0h+QA
*/

type AllowedItems = Food | {fuck: 'no'} 

interface CardProps{
    item: AllowedItems
    title: string
    price: number
}

const Card: React.FC<CardProps> = ({item, title, price, children}) => {
    return (        
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src={cardPlaceholder} alt={title}/>
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
/*
    ! WARNING: I'm not sure how to propably type this situation
        I though it would be cool to pass Generic Type in Card
        for Field, so you wouldn't to describe it in <Field<Type> ...>
                        by yourself. 
*/
interface FieldProps<T extends AllowedItems> {
    item?: T
    field: keyof T 
    label: string
}

const Field = <T extends AllowedItems,>({item, field, label}: FieldProps<T>) => {

    if (typeof item![field] === 'boolean') {
        return <p>{label}: {item![field] ? 'Yes' : 'No'}</p>
    }

    return <p>{label}: {item![field]}</p>

}

export { Field }