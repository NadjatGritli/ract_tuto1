import { Outlet,NavLink } from "react-router-dom";
const Doctor = () => {
    return (
        <div className="doctor_details">
            <div>
                <p>
                    name: Dr fsil
                </p>
                <p>
                    adress: isser
                </p>
                <button>roundez-vous</button>
            </div>
            <div className="d-flex">
                <NavLink  to="">patient</NavLink>
                <NavLink  to="persecription">persecription</NavLink>
                <NavLink  to="dates">dates</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
export default Doctor;