import React from 'react'

import Category from 'components/Category'

import useTypedSelector from 'hooks/useTypedSelector'

const Categories: React.FC = () => {

    const categories = useTypedSelector(state => state.categories.all)

    return (
        <div>
            {categories.map(category => {
                return <Category category={category} />
            })}
        </div>
    )
}

export default Categories
