import { useEffect, useState } from "react";
import DLogin from "./d_login";
import MLogin from "./m_login";
export default function Login(){
    const [view, setView] = useState('d');
    useEffect(() => {
        const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        if(isMobile)
            setView('m')
    }, [])
    return(
        <>
        {(view === 'm') ? <MLogin view = "m"/> : <DLogin/>}
        </>

    )
}