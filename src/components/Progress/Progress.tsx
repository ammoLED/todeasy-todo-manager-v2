import React from 'react'

interface Props<T> {
    arr: T[]
    filterFunc: (item: T) => boolean
}

const Progress = <T, >({ arr, filterFunc }: Props<T>) => {

    const requiredArr = arr.filter(filterFunc)

    const percent = requiredArr.length / arr.length * 100

    return (
        <div className="progress">{percent}%</div>
    )

}

export default Progress
