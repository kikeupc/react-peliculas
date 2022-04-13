import React, { useEffect, useState } from 'react';
import { landingPageDto } from './peliculas/peliculas.model'
import ListadoPeliculas from './peliculas/ListadoPeliculas'

export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDto>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, titulo: 'Spider-Man: far from Home',
                        poster: 'https://m.media-amazon.com/images/I/810OkkP0LnL._AC_SY879_.jpg'
                    },
                    {
                        id: 2, titulo: 'Manimal',
                        poster: 'https://static.wikia.nocookie.net/cine/images/0/08/Anaconda-1997.jpg'
                    }
                ],
                proximosEstrenos: [
                    /*{
                      id: 3, titulo: 'Men in Black',
                      poster: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Men_in_Black_Poster.jpg'
                    }*/
                ]
            })
        }, 500);

        return () => clearTimeout(timerId)
    })

    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>

    )

}