import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {  ListFilter} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs"
import Navbar from "../DevicesPage/Navbar"
import './OrdersPage.css'
import PotentialAD from "./PotentialAD"
export default function OrdersPage() {
  return (
    <div className="flex w-full flex-col ">
      <div className="flex flex-col gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <div>
          <Navbar />
        </div>
        <main className="grid flex-1 items-start gap-4 p-4  sm:py-0 md:gap-8">
          <div>
          <PotentialAD />
         </div>
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <div className="OrdersNav">
                    <div className="OrdersTitle1">
                      <h3>Past Orders</h3>
                    </div>
                    <div className="OrdersTitle2">
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg pl-8 md:w-[200px] lg:w-[336px] h-12"
                      />
                    </div>
                  </div>
                  <CardDescription className="Description">
                    <div className="OrdersDescription">
                    Find Your Recent Orders Here
                    </div>
                    <div className="OrdersFilter">
                      <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="h-8 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Filter
                              </span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Filter by Order Date</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem >
                            Last 3 months
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            last 6 months
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem checked>
                            2023
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            2022
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem>
                            2021
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="overflow-scroll">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="Ordershead">
                          Device Name
                        </TableHead>
                        <TableHead className="Ordershead">
                          Model Number
                        </TableHead>
                        <TableHead className="Ordershead">
                          Date Of Purchase
                        </TableHead>
                        <TableHead className="Ordershead">
                          Order number
                        </TableHead>
                        <TableHead className="Ordershead">
                          Order Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="OrdersRow">
                        <TableCell>
                          <div>Device_1_Name</div>
                        </TableCell>
                        <TableCell>
                          <div>Device_1_model_number</div>
                        </TableCell>
                        <TableCell>12-06-2024</TableCell>
                        <TableCell>82345678</TableCell>
                        <TableCell>Out For Delivery</TableCell>
                      </TableRow>
                      <TableRow className="OrdersRow">
                        <TableCell >
                          <div>Device_2_Name</div>
                        </TableCell>
                        <TableCell>Device_2_model_number</TableCell>
                        <TableCell>20-06-2023</TableCell>
                        <TableCell>23456789</TableCell>
                        <TableCell>Fulfilled</TableCell>
                      </TableRow>
                      <TableRow className="OrdersRow">
                        <TableCell>
                          <div>Device_3_Name</div>
                        </TableCell>
                        <TableCell>
                          <div>Device_3_model_number</div>
                        </TableCell>
                        <TableCell>21-01-2023</TableCell>
                        <TableCell>21232212</TableCell>
                        <TableCell>Fullfiled</TableCell>
                      </TableRow>
                      <TableRow className="OrdersRow">
                        <TableCell>
                          <div>Device_4_Name</div>
                        </TableCell>
                        <TableCell>
                          <div>Device_4_model_number</div>
                        </TableCell>
                        <TableCell>19-04-2022</TableCell>
                        <TableCell>11221122</TableCell>
                        <TableCell>Fulfilled</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                {/* <CardFooter>
                    <div className="text-xs text-muted-foreground">
                      Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                      products
                    </div>
                  </CardFooter> */}
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
