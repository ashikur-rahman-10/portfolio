import React from "react";
import { Triangle } from "react-loader-spinner";

const useLoader = () => {
    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <Triangle
                height="80"
                width="80"
                color="#7D35FC"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default useLoader;
