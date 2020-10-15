import React from 'react'
import {Link} from 'react-router-dom'

function cards({data}) {

    return (
        <>
        <Link to={`movie/${data.id}`}>
        <div class="col py-1 pt-5">
        <div className="cards">
    <img src={`https://image.tmdb.org/t/p/w400/${data.poster_path}`} className="rounded d-block  " alt="..."/>
    </div>
    </div>
    </Link>
        </>
    )
}

export default cards
