import React, { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

const Main = ({children}: MainProps) => {
    return (
        <div id="main">
            {children}
        </div>
    );
};

export default Main;