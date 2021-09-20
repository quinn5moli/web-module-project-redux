import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';
import { addFavorites } from '../actions/favoriteActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movies = props.movies;
    const movie = movies.find(movie=>movie.id===Number(id));
    
const favorites = props.favorites

    const handleDelete = () => {
        props.deleteMovie(movie.id)
        push('/movies')
    }

    const handleAddFavorite = () => {
        props.addFavorites(movie);
    }

    const filteredFavorites = favorites.filter(item => item.id === movie.id).length > 0

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            {favorites.filter(item => item.id === movie.id).length < 1 ? 
                            <span 
                            className="m-2 btn btn-dark"
                            onClick={handleAddFavorite}
                            >Favorite</span> : null}
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={handleDelete}/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}


const mapStateToProps = state => {
    return ({
        movies: state.myMovies.movies,
        favorites: state.myFavorites.favorites,
    })
}

const mapActionsToProps = {
    deleteMovie,
    addFavorites,
}

export default connect(mapStateToProps, mapActionsToProps)(Movie);