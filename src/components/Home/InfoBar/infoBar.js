import "./infoBar.css"
export default function(props){
    return(
        <div className = "InfoBarRectangle">
            <div className = "InfoBarColumn">
                <div className = "InfoBarNumbers">
                    300
                </div>
                <div className = "InfoBarTitle">
                    students
                </div>
            </div>
            <div className = "InfoBarColumn">
                <div className = "InfoBarNumbers">
                    200
                </div>
                <div className = "InfoBarTitle">
                    books
                </div>
            </div>
            <div className = "InfoBarColumn">
                <div className = "InfoBarNumbers">
                    50
                </div>
                <div className = "InfoBarTitle">
                    unreturned
                </div>
            </div>
        </div>
    )
}