import MachineReadings from "./MachineReadings";
import Modes from "./Modes";
import Navbar from "../DevicesPage/Navbar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import DeviceName from "./DeviceName";
import Adjustable from "./Adjustable";
export default function ControlPage() {
    return (

        <div className="ControlPage">
            <Navbar />
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle><DeviceName /></CardTitle>
                  <CardDescription>
                  <MachineReadings />
                  </CardDescription>
                </CardHeader>
                <CardContent>
                 <Adjustable />
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                  <Modes />
                  </div>
                </CardFooter>
              </Card>
        </div>
    )
}