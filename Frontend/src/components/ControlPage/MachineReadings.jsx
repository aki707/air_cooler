export default function MachineReadings() {
return(
<div className="Navbar">
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <h6
            className="text-foreground transition-colors hover:text-foreground pr-32"
          >
            Temperature
          </h6>
          <h6
            className="text-muted-foreground transition-colors hover:text-foreground px-60"
          >
            Humidity
          </h6>
          <h6
            className="text-muted-foreground transition-colors hover:text-foreground pl-60"
          >
            Water level
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