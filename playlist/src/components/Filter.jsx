import React from "react";

const Filter = props => {
    return(
        <div>
            Filter:&nbsp;
            <select onChange={props.setFilterGenre} name="genre">
                    <option value="all">all</option>
                    <option value="pop">pop</option>
                    <option value="rock">rock</option>
                    <option value="country">country</option>
                    <option value="classic">classic</option>
                    <option value="jazz">jazz</option>
                    <option value="soul">soul</option>
                    <option value="hip-hop">hip-hop</option>
                </select>  
                &nbsp;
                <select onChange={props.setFilterRating} name="rating">
                    <option value="all">all</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> 
        </div>
    );
}

export default Filter;