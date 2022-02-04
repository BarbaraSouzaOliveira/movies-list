import React, { useEffect, useState } from 'react'
import FilterButton from '../atoms/FilterButton'
import { teste, imageLoad } from '../Services'
function Home() {
    const [books, setBooks] = useState()
    useEffect(() => {
        const getData = async () => {
            return await teste()
        }
        let data = getData
        let newBooksList
        data.results.forEach(async (result) => {
            let newImage = await imageLoad('w500', result.poster_path)
            newBooksList.push({
                name: result.original_title,
                date: result.release_date,
                img: newImage,
            })
        })
        setBooks(newBooksList)
        console.log('books', books)
    }, [])
    return (
        <div>
            <FilterButton text="Romance" />
            {books.map((book, index) => {
                return <h1 key={index}>{book.name}</h1>
            })}
        </div>
    )
}
export default Home
