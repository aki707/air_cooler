import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



import React, {useState, useContext} from 'react'

import { Link } from 'react-router-dom' 
import AuthContext from "../context/AuthContext"




const SignUp = () => {
  const [full_name, setFull_name] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const {registerUser} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(full_name)
    console.log(email)
    console.log(username)

    registerUser(full_name, email, username, password, password2)
  }


  return (
    
    <Card className="mx-auto max-w-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Full name</Label>
              <Input id="first-name" placeholder="Max"  onChange={(e)=>setFull_name(e.target.value)} required />
            </div>
           
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="username"onChange={(e)=>setUsername(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password2</Label>
            <Input id="password2" type="password" onChange={(e)=>setPassword2(e.target.value)}/>
          </div>
          <Button onClick={handleSubmit} type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/" className="underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default SignUp

