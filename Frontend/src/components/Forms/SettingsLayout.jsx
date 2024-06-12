import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Outlet } from 'react-router-dom';
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./component/SidebarNav"
import Navbar from '../DevicesPage/Navbar';
// export con st metadata = {
//   title: "Forms",
//   description: "Advanced form example using react-hook-form and Zod."
// }

const sidebarNavItems = [
  {
    title: "Profile",
    href: "profile"
  },
  {
    title: "Account",
    href: "account"
  },
  {
    title: "Appearance",
    href: "appearance"
  },
  {
    title: "Notifications",
    href: "notifications"
  },
  {
    title: "Display",
    href: "display"
  }
]

export default function SettingsLayout() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      {/* <Helmet>
        <title>Forms - Advanced form example using react-hook-form and Zod</title>
        <meta name="description" content="Advanced form example using react-hook-form and Zod." />
      </Helmet>
      <div className="md:hidden">
        <img
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <img
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        /> */}
      {/* </div> */}
      <div className="hidden space-y-6 p-10 pb-16 md:block border border-grey rounded-md mt-4" >
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl"><Outlet/></div>
        </div>
      </div>
    </>
  )
}
