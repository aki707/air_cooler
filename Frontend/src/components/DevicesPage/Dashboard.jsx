import {
  ArrowUpRight,
  DollarSign,
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
import './Dashboard.css';
import Navbar from "./Navbar"
import Status from "./Status"

export default function Dashboard() {
  return (
    
    <div className="flex flex-col min-h-screen w-full">
    {/* Navbar added here */}
    <Navbar />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
       
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>My Devices</CardTitle>
                <CardDescription>
                  All available devices in your account
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <a href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
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
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                        Device_1_Name
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
                    <TableCell className="text-right"> <Status /> </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                      Device_2_Name
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                      Device_2_model_number
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Refund
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-24
                    </TableCell>
                    <TableCell className="text-right">
                    <Status />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                      Device_3_Name
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                      Device_3_model_number
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Subscription
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      <Badge className="text-xs" variant="outline">
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                      2023-06-25
                    </TableCell>
                    <TableCell className="text-right"><Status /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">
                      Device_4_Name
                      </div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                      Device_4_model_number
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
                      2023-06-26
                    </TableCell>
                    <TableCell className="text-right"><Status /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="new-card">
           <div className="nested-1">
           <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Electricity Consumption
              </CardTitle>
              
              <DollarSign className="h-4 w-4 text-muted-foreground" />
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
          <Card x-chunk="dashboard-01-chunk-3">
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
