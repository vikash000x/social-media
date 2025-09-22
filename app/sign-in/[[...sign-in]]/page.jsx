import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  console.log("sign in page")
    return( 
   
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />


    )
  
}

export default page