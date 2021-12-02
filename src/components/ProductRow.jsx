import React from "react";

export default function ProductRow( props ){

    const {product} = props

    console.log("Product Row ", props)


    return(

        <tr> 
        <td>{product.name}</td>
        <td> {product.price} </td>
        </tr>
        

    )
}