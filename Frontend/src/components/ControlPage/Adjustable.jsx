import FanSlider from "./FanSlider";
import WaterLevelSlider from "./WaterLevelSlider";
import "./Adjustable.css";

export default function Adjustable() {
    return(
        <div className="Adjustable">
            <FanSlider />
            <WaterLevelSlider />
        </div>
    )
}