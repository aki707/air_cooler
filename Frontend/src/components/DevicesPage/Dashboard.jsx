import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
 Plus,
 Search,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
import './Dashboard.css';
import Navbar from "./Navbar"
import Status from "./Status"
import axios from "axios"
import {useEffect, useState} from 'react'
import Options from "./Options"
import { set } from "date-fns"

export default function Dashboard() {

  const [data, setData] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [editText, setEditText] = useState({
    'name': ''
  })

  useEffect(() => {
    fetchData()
    console.log(data);

  }, []);
   
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/connect/sensors/');
      // const data = await response.json();
      setData(response.data)
      setLoading(false)

    } catch (error) {
      console.error(error);
    }
  }
// new device add function
  const [newDevice, setNewDevice] = useState({
    'name': '',
  })

  const handleChange = (e) => {
    setNewDevice(prev => ({
      ...prev,
      'name': e.target.value
    }))
    console.log(newDevice);
  }

  const postDevice = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/connect/sensors/', newDevice);
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }


// delete function
const handleDelete = async (id) => {
  try {
    // Correct usage of template literals for embedding the id
    await axios.delete(`http://127.0.0.1:8000/connect/sensors/${id}/`);
    const newList = data.filter((device) => device.id !== id);
    setData(newList);
  } catch (error) {
    console.log(error);
  }
};

// update function
const handleEdit = async (id, value) => {
  try{
    const response = axios.patch(`http://127.0.0.1:8000/connect/sensors/${id}/`, value)
    const newDevice = data.map(device => data.id === id ? response.data : device)
    setData(newDevice)
  }
  catch (error) {
    console.log(error);
  }
}

const handleEditChange = (e) => {
  setEditText(prev => ({
    ...prev,
    'name': e.target.value
  }))}


  return (
    
    <div className="flex flex-col min-h-screen w-full">
    {/* Navbar added here */}
    <Navbar />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
       
          <Card
            className="xl:col-span-2 shadow-lg" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>My Devices</CardTitle>
                <CardDescription>
                  All available devices in your account
                </CardDescription>
              </div>
              <Dialog>
          <DialogTrigger asChild>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                <Plus className='mr-2 h-4 w-4' />
                  Add Device
                </a>
              </Button>
              </DialogTrigger>

              <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Device</DialogTitle>
              <DialogDescription>
                You can find device name on website or on the device itself.
              </DialogDescription>
            </DialogHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid gap-2'>
                Device Name
                <div className="relative">
              <DialogDescription className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="DropdownMenuSeparatorch"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                onChange={handleChange}
                value={newDevice.name}
              />
              
            </div>
                {/* <Label htmlFor='url'>   Device Name</Label> */}
              </div>
            </div>
            <DialogFooter>
              <Button onClick = {postDevice}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Devices Registerd</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody
                data={data}
                setData={setData}
                isLoading={isLoading}
                >
                  {isLoading ? <div>Is Loading..</div>:
                  <>
                  {data.map((device, index) => {
                    return( 
                  <TableRow key={device.id}>
                    <TableCell>
                      <div className="font-medium">
                        {device.name}
                        </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Device_1_model_number
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-23
                    </TableCell>
                    <TableCell className="text-right">         <DropdownMenu>
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
                          <Button asChild size="sm" className="ml-auto gap-1" onClick={()=>setEditText(device)}>
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
                                    value = {editText.name}
                                    onChange={handleEditChange}
                                    />
                              </div>
                {/* <Label htmlFor='url'>   Device Name</Label> */}
                            {/* </div> */}
                          </div>
                          <DialogFooter>
                            <Button onClick={()=> handleEdit(editText.id, editText)}>
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
                            <Button  onClick={()=> handleDelete(device.id)}>
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
                </DropdownMenu> </TableCell>
                  </TableRow>
     
                )  })}</>}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="new-card ">
           <div className="nested-1 ">
           <Card className="shadow-lg"  x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Electricity Consumption
              </CardTitle>
              
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
            <div className="readings">
              <p> <img src="temp.png" /> Electricity Consumed: 25.5°C  </p>
              </div>
              <div className="readings">
              <p> <img src="temp.png" /> Electricity saved: 25.5°C  </p>
              </div>
            </CardContent>
          </Card>
          </div>
          <div className="nested-2">
          <Card className='shadow-lg' x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Real-Time Environment Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="readings">
              <p> <img src="temp.png" /> Temperature: 25.5°C  </p>
              </div>
              <div className="readings">
               <p> <img src="humidity.png" /> Humidity: 60%</p>
              </div>
              <div className="readings">
               <p> <img src="weather.png" /> sunny</p>
              </div>
            </CardContent>
          </Card>
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}
