import React, { useState, useEffect } from "react";
import "./calculator.css";

const data = [
    {
        "Title": "The Death of Spiderman",
        "Year": 2015,
        "imdbID": "tt5921428"
    },
    {
        "Title": "Beat Feet: Scotty Smiley's Blind Journey to Ironman",
        "Year": 2015,
        "imdbID": "tt5117146"
    },
    {
        "Title": "Beat Feet: Scotty Smiley's Blind Journey to Ironman",
        "Year": 2014,
        "imdbID": "tt5117146"
    },
    {
        "Title": "Beat Feet: Scotty Smiley's Blind Journey to Ironman",
        "Year": 2022,
        "imdbID": "tt5117146"
    }
]

function MovieList() {

    const [input, setInput] = useState('');
    const [movie, setMovie] = useState([]);
    const [massage, setMassage] = useState({ show: false, erorr: false });

    useEffect(() => {
        if (input.length !== 0) {
            setMassage(preState => ({ ...preState, show: false, erorr: true }));
        } else {
            setMassage(preState => ({ ...preState, show: true, erorr: false }));
        }
    }, [input])

    const changeHandler = (event) => {
        let { value } = event.target;
        setInput(value);
    }
    const movieList = () => {
        let movie = data.filter(item => (item.Year === Number(input)));
        setMovie(movie);
        setMassage(preState => ({ ...preState, show: true }));
    }

    return (
        <div className="layout-column align-items-center mt-50">
            <section className="layout-row align-items-center justify-content-center">
                <input value={input} onChange={changeHandler} type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" />
                <button onClick={movieList} className="" data-testid="submit-button">Search</button>
            </section>
            {console.log("massage", massage)}
            <ul className="mt-50 styled" data-testid="movieList">
                {
                    movie.length !== 0 ?
                        movie?.map((movie, ind) => <li key={ind} className="slide-up-fade-in py-10">
                            <h1>Title: {movie.Title}</h1>
                            <h4>Year: {movie.Year}</h4>
                            <p>imdbID: {movie.imdbID}</p>

                        </li>)
                        :
                        <>
                            {(massage.show && massage.erorr) && <span> <strong>Movie not Found </strong></span>}
                            {(massage.show && !massage.erorr) && <span> <strong>Please Enter Movie Year</strong> </span>}
                        </>

                }
            </ul>
            <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
        </div>
    );
}

export default MovieList