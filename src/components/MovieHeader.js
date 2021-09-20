import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavoritesList } from '../actions/favoriteActions';

const MovieHeader = (props) => {
    const appTitle = props.appTitle;
    const displayFavorites = props.displayFavorites;

const handleFavoritesToggle = () => {
    props.toggleFavoritesList()
}
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary" onClick= {handleFavoritesToggle}><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return {
        appTitle: state.myMovies.appTitle,
        displayFavorites: state.myFavorites.displayFavorites,
    }
}

const mapActionsToProps = {
    toggleFavoritesList,
}

export default connect(mapStateToProps, mapActionsToProps)(MovieHeader);