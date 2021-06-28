import './sDetail.css'
import titleBarIcon from '../../../assets/titleBarIcon.png'

export default function (props) {
    return (
        <div style = {{background:'#fff', width:'100vw', marginLeft:'-24px', paddingLeft:'24px', paddingRight:'24px', marginTop:'18px'}}>
            <div style= {{display:'flex', justifyContent:'flex-end', marginTop:'2px'}}>
                X
            </div>
            <div className="sDetailRectangle">
                <div className="sDetailImage">
                    <img src={titleBarIcon} style={{ width: "42px", height: 'auto' }} />
                </div>
                <div className="sDetailDetails">
                    <div className="sDetailName">
                        Ashish Mathew Philip
                    </div>
                    <div className="sDetailUnder">
                        <div style={{ marginRight: '10px', fontWeight: 'bold' }}>
                            13420,
                        </div>
                        <div>
                            X-A
                        </div>
                    </div>
                    <div className="sDetailUnder">
                        <div className="sDetailIssued">
                            20 issued
                        </div>
                        <div className="sDetailUnreturned">
                            0 unreturned
                        </div>
                    </div>
                </div>
                <div className="sDatailBGroup">
                    <div className="sDetailButton">
                        More details
                    </div>
                    <div className="sDetailButton">
                        Issue book
                    </div>
                </div>

            </div>
        </div>
    )
}