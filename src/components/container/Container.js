import React from "react";

const Container = ({children,type}) => {

    return <div className={` z-10 max-w-7xl mx-auto ${type} `}>{children}</div>;
       
}

export default Container;
