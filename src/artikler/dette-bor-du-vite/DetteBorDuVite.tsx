import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";

import DetteBorDuViteBokmal from "./DetteBorDuViteBokmal";
import DetteBorDuViteNynorsk from "./DetteBorDuViteNynorsk";
import DetteBorDuViteEnglish from "./DetteBorDuViteEnglish";

const DetteBorDuVite: React.FC = () => {

    let valgtSprak = detekterSprak(window.location.search);

    switch (valgtSprak) {
        case Sprak.NORSK_BOKMAL:
            return <DetteBorDuViteBokmal />;
        case Sprak.NYNORSK:
            return <DetteBorDuViteNynorsk />;
        case Sprak.ENGELSK:
            return <DetteBorDuViteEnglish />;
        default:
            return <div/>;
    }
};

export default DetteBorDuVite;
