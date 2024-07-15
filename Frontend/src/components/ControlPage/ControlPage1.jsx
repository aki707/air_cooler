import Modes from "./Modes";
import Navbar from "../DevicesPage/Navbar";
import Adjustable from "./Adjustable";
import Climate from "./Details/Climate";

export default function ControlPage1() {
    return (

        <div className="ControlPage">
            <Navbar />
            <div className="mt-10">
                <Climate />
                <Adjustable />
                <div className="text-xs text-muted-foreground">
                <Modes />
                </div>
            </div>
                
            
        </div>
    )
}