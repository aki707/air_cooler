import {
    Activity,

    CircleUser,

    Menu,
    Package2,
    Search,
    Users,
  } from "lucide-react"
  import {NavLink} from 'react-router-dom'
  import { Button } from "@/components/ui/button"

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import './Navbar.css';
  
export default function Navbar() {
return(
<div className="Navbar">
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <NavLink to="/cp"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </NavLink>
          <NavLink to="/dashboard"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </NavLink>
          <NavLink to="/og"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </NavLink>
          <NavLink to="/pg"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </NavLink>
          <NavLink to="/settings/profile"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Settings
          </NavLink>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Other Profiles</DropdownMenuLabel>
              <DropdownMenuItem>Account 1</DropdownMenuItem>
              <DropdownMenuItem>Account 2</DropdownMenuItem>
              <DropdownMenuItem>Account 3</DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/">Add a Account </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
)
    }