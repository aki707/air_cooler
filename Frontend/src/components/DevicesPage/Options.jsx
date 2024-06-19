import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button"
  import { ListFilter } from "lucide-react"
  
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import './Options.css'
import axios from "axios"



export default function Options(data, setData, isLoading) {
  // delete function
const handleDelete = async (id) => {
  try{
  await axios.delete('http://127.0.0.1:8000/connect/sensors/{id}/')
  const newList = data.filter((device) => device.id !== id)
  setData(newList)
  }
  catch (error) {
    console.log(error);
  }
}
    return(
            <div className="options">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="threedots">
                      <h6 className="threedottext">
                        ...
                      </h6>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    
                    <div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button asChild size="sm" className="ml-auto gap-1">
                            <a href="#">
                              Edit
                            </a>
                          </Button>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Edit Device Name
                            </DialogTitle>
                            {/* <DialogDescription>
                              You can find device name on website or on the device itself.
                            </DialogDescription> */}
                          </DialogHeader>
                          <div className='grid gap-4 py-4'>
                            {/* <div className='grid gap-2'>
                               New Device Name */}
                              <div className="relative">
                                  <DialogDescription className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                    type="DropdownMenuSeparatorch"
                                    placeholder="Enter New Name"
                                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                    />
                              </div>
                {/* <Label htmlFor='url'>   Device Name</Label> */}
                            {/* </div> */}
                          </div>
                          <DialogFooter>
                            <Button>
                              Update
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                    </div>
                    <div>
                    <Dialog>
                        <DialogTrigger asChild>
                          <Button asChild size="sm" className="ml-auto gap-1">
                            <a href="#">
                              Delete
                            </a>
                          </Button>
                        </DialogTrigger>

                        <DialogContent>
                          <div className='grid gap-4 py-4'>
                            <div className='grid gap-2'>
                            Are You Sure You Want To Remove This Device?
                {/* <Label htmlFor='url'>   Device Name</Label> */}
                            </div>
                          </div>
                          <DialogFooter>
                            <Button  onClick={()=> handleDelete(data.id)}>
                              Delete
                            </Button>
                            <Button>
                              Cancel
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>

                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
    )
}       