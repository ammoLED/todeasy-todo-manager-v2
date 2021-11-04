import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setPageName } from "store/actions/appActions"
import CategoryList from "components/CategoryList"

const Categories: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageName({ pageName: "Categories" }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section>
            <CategoryList/>
        </section>
    )
}

export default Categories
