import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from './Card';
import { Modal } from './Modal';

const API_URL = 'https://api.themoviedb.org/3';
const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';

export function Lista(){
    const[movies, setMovies] = useState([]);
    const [SelectedMovie, setSelectedMovie] = useState(null)

    //()parametros {}script de programação , []dependencias
    useEffect(()=>{
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response=>{
                console.log(response.data.results);
                setMovies(response.data.results);
            })
            .catch(error => {
                console.log('erro', error);
            });
    },[]);

    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    }

    const handleCloseModal = () => {
        setSelectedMovie(null);
    }

    return(
        <div>
            <figure>
                {movies.map(movie=>(
                    <Card key={movie.id}
                    movie={movie}
                    onOpenModal = {handleOpenModal}
                    />
                ))}
            </figure>
            {SelectedMovie && (<Modal movie={SelectedMovie} onClose = {handleCloseModal}/>)} 
        </div>
    )

}