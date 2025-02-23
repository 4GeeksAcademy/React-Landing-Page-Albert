import React from "react";

const Card = (props) => {
    return (
        <div className="card custom-rounded">
            <img src={props.img} className="cardImg card-img-top fixed-img" alt="..."/>
            <div className="card-body d-flex justify-content-center">
                <h4 className="card-title text-light text-center mt-1">{props.h5}</h4>
            </div>
        </div>
    );
};

export default Card;
