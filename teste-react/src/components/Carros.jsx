import React from "react";
import carro1 from "../assets/img/carro1.jpg"

export default function Carros(props){

    return(
        <>
            <img src={carro1} width="250px" />
            <ul>
                <li>{props.modelos[0]}</li>
                <li>{props.modelos[1]}</li>
                <li>{props.modelos[2]}</li>
                <li>{props.modelos[3]}</li>
                <li>{props.modelos[4]}</li>
            </ul>
        </>
    )
}