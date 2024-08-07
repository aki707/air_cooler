import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import './PotentialAD.css'
export default function PotentialAD() {
    return(
        <div className="potentialAD w-full">
            <Card sx={{ display: 'flex', height: 200, width: 181 }}>
                <div className='ad pt-4 flex flex-col sm:flex-row '>
                        <CardContent className="p-0 pl-2">
                            <div>
                                <img src="/Coolernew.jpg" alt="cooler" className="w-auto h-36 object-contain" />
                            </div>
                        </CardContent>
                    
                    <div className='adInfo'>
                        <CardContent>
                            <div>
                                <h6>Potential AD-Device Name (Model Number)</h6>
                            </div>
                            < div>
                                <h6>Potential Description- ////description//// </h6>
                            </div>
                            
                        </CardContent>
                    </div>
                    <div className='adPrice'>
                        <CardContent>
                            <div className="pricetag">
                                <h6 >Price</h6>
                            </div>
                        </CardContent>
                    </div>
                </div>
            </Card>
        </div>
    )
}