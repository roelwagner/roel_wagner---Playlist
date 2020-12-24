import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import SongForm from "./SongForm";
import SongList from "./SongList";
import OptionsMenu from "./OptionsMenu";

class SongOverview extends Component {

    constructor() {
        super()
        this.state = {
            songs: [
                {id: uuidv4(), title: "a ring of fire", artist: "johny cash", genre: "country", rating: "4"},
                {id: uuidv4(), title: "the dock of the bay", artist: "ottis redding", genre: "soul", rating: "5"},
            ],
            sortFactor: "Artist",
            filterGenre: "all",
            filterRating: "all",
        }
    }

    addSong = event => {
        event.preventDefault();
        const id = uuidv4();
        const title = event.target.previousSibling.previousSibling.previousSibling.previousSibling.value;
        const artist = event.target.previousSibling.previousSibling.previousSibling.value;
        const genre = event.target.previousSibling.previousSibling.value;
        const rating = event.target.previousSibling.value;
        
        if((artist!=="")&&(artist!== null)){
            if((title!=="")&&(title!== null)){
                const song = {
                    id: id, 
                    title: title.toLowerCase(), 
                    artist: artist.toLowerCase(), 
                    genre: genre, 
                    rating: rating
                };
                const newList = [song, ...this.state.songs];
                newList.sort((a,b) => (a.genre >= b.genre) ? 1 : -1);
                this.setState({songs: newList})
            }
        }else {
            alert("New Songs need: title & artist minimum!");
        }
    }

    delSong = event => {
        const songList = [...this.state.songs]
        const delID = event.target.id
        const songToDelete = songList.find(song => song.id === delID);
        const newSongList = songList.filter(song => song !== songToDelete);
        this.setState({songs: newSongList})
    }

    setSortFactor = event => {
        const sortFactor = event.target.value
        this.setState({sortFactor: sortFactor});
    }

    sortSongList = event => {
        const currentFilter = event.target.value;
        const newList = [...this.state.songs];

        if(this.state.sortFactor === "Artist" && currentFilter === "Ascending"){
            newList.sort((a,b) => (a.artist >= b.artist) ? 1 : -1)
        } else if (this.state.sortFactor === "Artist" && currentFilter === "Descending"){
            newList.sort((a,b) => (a.artist >= b.artist) ? -1 : 1)
        }else if(this.state.sortFactor === "Title" && currentFilter === "Ascending"){
            newList.sort((a,b) => (a.title >= b.title) ? 1 : -1)
        } else if (this.state.sortFactor === "Title" && currentFilter === "Descending"){
            newList.sort((a,b) => (a.title >= b.title) ? -1 : 1)
        }
        this.setState({songs: newList})
    }

    setFilterGenre = event => {
        const genre = event.target.value;
        this.setState({filterGenre: genre})
    }

    setFilterRating = event => {
        const rating = event.target.value;
        this.setState({filterRating: rating})
    }
    
    filteredSongs = () => {
        const genreList = [...this.state.songs].filter(song => song.genre === this.state.filterGenre);
        const ratingList = [...this.state.songs].filter(song => song.rating === this.state.filterRating);
        const filteredList = genreList.filter(song => song.rating === this.state.filterRating);

        if(this.state.filterGenre === "all" && this.state.filterRating === "all"){
            return this.state.songs;
        } else if(this.state.filterRating === "all"){
            return this.state.filterGenre === "all" ? this.state.songs : genreList;
        } else if(this.state.filterGenre === "all"){
            return this.state.filterRating === "all" ? this.state.songs : ratingList;
        } else {
            return filteredList;
        }        
    }

    render() {
        return (
            <div className="wrapper">
                <SongForm addSong={this.addSong}/>
                <hr className="optionsline top" />
                <OptionsMenu 
                    setSortFactor={this.setSortFactor} 
                    sortSongList={this.sortSongList}
                    setFilterGenre={this.setFilterGenre}
                    setFilterRating={this.setFilterRating}
                />
                <hr className="optionsline bottom" />
                    <table>
                        <tbody>
                            <tr className="song-header">  
                                <th className="song-header__item">Title</th>
                                <th className="song-header__item">Artist</th>
                                <th className="song-header__item">Genre</th>
                                <th className="song-header__item">Rating</th>
                            </tr>
                            <SongList 
                                songs={this.filteredSongs} 
                                delSong={this.delSong} 
                            />
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default SongOverview;