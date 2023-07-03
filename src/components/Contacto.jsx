import React, { useState } from "react";

const ExampleComponent = () => {


    let guia = 6

    return (
        <div className="">

            <button style={{transform : `translateX(${guia}00%)`}}
                className={`h-10 w-10 bg-red-600 transform duration-500 transition`}
            ></button>

        </div>
    );
};

export default ExampleComponent;
