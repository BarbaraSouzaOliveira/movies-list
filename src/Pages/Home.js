import React, { useEffect } from 'react'
import FilterButton from '../atoms/FilterButton'
import { teste } from '../Services'
function Home() {
    useEffect(() => {
        teste()
    }, [])
    return (
        <div>
            <FilterButton text="Romance" />
        </div>
    )
}
export default Home
