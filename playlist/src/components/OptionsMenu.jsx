import React from "react";
import SortSongs from "./SortSongs";
import Filter from "./Filter"

const OptionsMenu = props => {
    return(
        <div className="options-menu">
            <SortSongs 
                setSortFactor={props.setSortFactor} 
                sortSongList={props.sortSongList} 
            />
            <Filter setFilterGenre={props.setFilterGenre} setFilterRating={props.setFilterRating} />
        </div>
    );
}

export default OptionsMenu;