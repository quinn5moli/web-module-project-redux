import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorites } from '../actions/favoriteActions';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    const handleRemoveFavorites = (e) => {
        e.persist()

        props.removeFavorites(parseInt(e.target.id))
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span>
                            <span 
                            class="material-icons"
                            onClick={handleRemoveFavorites}
                            id={movie.id}
                            >remove_circle</span>
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.myFavorites.favorites,
    }
}

const mapActionsToProps = {
    removeFavorites
}

export default connect(mapStateToProps, mapActionsToProps)(FavoriteMovieList);