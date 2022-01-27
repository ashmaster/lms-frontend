import MLogin from "./m_login";
import school from '../../assets/school.jpg'
import './d_login.css'

export default function DLogin(){
    return(
        <div style={{display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh'}}>
            <div style={{width: '35%', height: '100vh'}}>
                <MLogin view = "d"/>
            </div>
            <div style={{width: '65%', height: '100vh', color: '#fff', justifyContent: 'center'}} className="img-right">
                <h1 style={{fontWeight: 'bold'}}>FGMHS</h1>
                <h1 style={{fontWeight: 'bold'}}>LIBRARY MANAGEMENT SYSTEM</h1>
            </div>
        </div>
    )
}