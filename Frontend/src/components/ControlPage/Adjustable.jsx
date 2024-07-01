import FanSlider from "./FanSlider";
import WaterLevelSlider from "./WaterLevelSlider";

export default function Adjustable() {
    return(
        <div className="flex flex-row gap-4">
            <FanSlider />
            <WaterLevelSlider />
        </div>
    )
}