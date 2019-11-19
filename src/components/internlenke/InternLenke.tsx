import * as React from "react";

import Lenke from "nav-frontend-lenker";

const InternLenke: React.FC<{path: string, children: React.ReactNode}> = ({path, children}) => {


    const onClick = (event: any, sti: string) => {
        console.log("TODO Gå til " + sti);
        event.preventDefault();
    };

    return (

        <Lenke href={path} onClick={(event: any) => onClick(event, path)}>

            {children}

        </Lenke>
    )
};

export default InternLenke;
