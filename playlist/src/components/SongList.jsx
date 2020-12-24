import React from "react";

const SongList = (props) => {
    const songs = props.songs().map(song => {
        return <tr key={song.id} className="song-row">  
                    <td className="song-row__item">{song.title}</td>
                    <td className="song-row__item">{song.artist}</td>
                    <td className="song-row__item">{song.genre}</td>
                    <td className="song-row__item">{song.rating}</td>
                    <td className="song-row__item trash">
                        <i  onClick={props.delSong} 
                            id={song.id} 
                            className="far fa-trash-alt"
                        ></i>
                    </td>
                </tr>
                
    })
    return(
        songs
    )
}

export default SongList;