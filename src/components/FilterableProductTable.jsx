import React from "react";
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default function FilterableProductTable(props){

    const{products} = props

    console.log(props)

    return (
        <>
        <h1> IronStore Carlos </h1>
        <SearchBar /> 
        <ProductTable products={products} />
        </>
    )

}