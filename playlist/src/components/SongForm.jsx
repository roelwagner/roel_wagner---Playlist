import React from "react";

const SongForm = (props) => {
    return(
        <div>
            <form id="songform" className="songform">
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="artist" placeholder="Artist" />
                <select id="genre" name="genre">
                    <option value="pop">pop</option>
                    <option value="rock">rock</option>
                    <option value="country">country</option>
                    <option value="classic">classic</option>
                    <option value="jazz">jazz</option>
                    <option value="soul">soul</option>
                    <option value="hip-hop">hip-hop</option>
                </select>  
                <select id="rating" name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>    
                <button onClick={props.addSong}>Add Song</button>
            </form>
        </div>
    )
}

export default SongForm;