
import Search from "./Search";

const AppHeader = () => {
 
    return (
        <header >
            <div className="header">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6 col-md-8 col-sm-6 col-xs-6 mt-3 "
                            style={{ color: "white", fontWeight: "bold", fontSize: 30 }}><i className="bi bi-person-workspace" style={{ color: "#8be9fd", marginLeft: "5px" }} />وب اپلیکیشن مدیریت {" "}<span style={{ color: "#8be9fd" }}>کارها</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-sm-6 col-xs-6">
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}
export default AppHeader;