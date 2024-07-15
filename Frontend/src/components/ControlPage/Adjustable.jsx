import FanSlider from "./FanSlider";
import WaterLevelSlider from "./WaterLevelSlider";

export default function Adjustable() {
    return(
        <div className=" md:flex md:flex-row md:justify-around ">
            <FanSlider />
            <WaterLevelSlider />
        </div>
    )
}