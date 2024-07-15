export default function DeviceName() {
    return(
    <div className="Navbar">
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <nav className=" flex flex-row gap-2 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <h6
                className="text-foreground transition-colors hover:text-foreground lg:pr-40"
              >
                Device Model
              </h6>
              <h6
                className="text-muted-foreground transition-colors hover:text-foreground lg:px-52"
              >
                Device Name
              </h6>
              <h6
                className="text-muted-foreground transition-colors hover:text-foreground lg:pl-56"
              >
                Connection Status
              </h6>
              {/* <NavLink to="/settings/profile"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Settings
              </NavLink> */}
            </nav>
            
          </header>
        </div>
    )
    }