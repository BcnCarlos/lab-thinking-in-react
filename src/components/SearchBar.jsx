import React from "react";

export default function SearchBar(){

    return(

        <div className="search">

        <form>

        <label htmlFor="name">Search: </label>
        <input type="text" name="name" placeholder="Enter Search Query"  value={0} onChange={0} />

        </form>

        </div>
    )

}