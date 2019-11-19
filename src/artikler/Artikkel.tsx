import * as React from "react";
import InternLenke from "../components/internlenke/InternLenke";
import BrodsmuleSti from "../components/banner/BrodsmuleSti";
import SprakVelger from "../components/sprakvelger/SprakVelger";


const Artikkel: React.FC<{ children: React.ReactNode, className?: string }> = ({children, className}) => {

    const tittel = "tittel";

    const defaultStiElementer: React.ReactNode[] = [
        <InternLenke path="/">Økonomisk sosialhjelp</InternLenke>,
        <span>{tittel}</span>
    ];

    return (
        <div className={"blokk-center " + className}>
            <BrodsmuleSti stiElementer={defaultStiElementer}/>

            <div className="artikkel">
                <SprakVelger/>
                <div className="innhold">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Artikkel;
