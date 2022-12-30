import React, { useEffect, useState } from 'react'

type Props = {
    results: {
        breedName: string,
        imgThumb: string
        // other properties from the API response
    }[]
}

const ImageGallery = ({ results }: Props) => {
    const [dogs, setDogs] = useState<Props['results']>([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d',
                'X-RapidAPI-Host': 'dogbreeddb.p.rapidapi.com',
            },
        }

        fetch('https://dogbreeddb.p.rapidapi.com/paginated/', options)
            .then((response) => response.json())
            .then((response) => {
                setDogs(response.results)
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center m-10">
            {dogs.slice(2, 10).map((dog) => (
                <div className="w-1/2">
                    <img className="md:w-full md:h-128 object-cover rounded-lg shadow-lg" src={dog.imgThumb} alt="" />
                </div>
            ))}
        </div>
    )
}

export default ImageGallery
