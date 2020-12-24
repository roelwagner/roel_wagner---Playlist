import React from "react";

const SortSongs = props => {
    return(
        <div>
            <label>Sort:</label>
            &nbsp;
            <select onChange={props.setSortFactor}>
                <option>Artist</option>
                <option>Title</option>
            </select>
            &nbsp;
            <select onChange={props.sortSongList}>
                <option>Ascending</option>
                <option>Descending</option>
            </select>
        </div>
    );
}

export default SortSongs;