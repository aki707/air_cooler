import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function Modes(){
    return(
        <div className="flex justify-around">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-2 md:px-6">
                <nav className=" flex-col gap-2 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 lg:pr-36">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Modes</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <RadioGroup defaultValue="custom">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="night" id="r1" />
                                    <Label htmlFor="r1">NIght Mode</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="auto" id="r2" />
                                    <Label htmlFor="r2">Auto Mode</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="custom" id="r3" />
                                    <Label htmlFor="r3">Custom Mode</Label>
                                </div>
                            </RadioGroup>
                        </PopoverContent>
                    </Popover>    
                </nav>
                <div className="flex items-center space-x-2 lg:px-60">
                    <Label htmlFor="airplane-mode">Power</Label>
                    <Switch id="power" />
                </div>
                <nav className=" flex-col gap-2 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 lg:pl-52">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Timer</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <RadioGroup defaultValue="off">
                            <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="off" id="r1" />
                                    <Label htmlFor="r1">Off</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="1hr" id="r1" />
                                    <Label htmlFor="r1">1 Hours</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="2hr" id="r2" />
                                    <Label htmlFor="r2">2 Hours</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="4hr" id="r3" />
                                    <Label htmlFor="r3">4 hours</Label>
                                </div>
                            </RadioGroup>
                        </PopoverContent>
                    </Popover>
                    </nav>
            </header>
        </div>
    )
}