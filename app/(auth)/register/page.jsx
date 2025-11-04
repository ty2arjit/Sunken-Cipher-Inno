import React from 'react'
import { RegisterForm } from '@/components/auth/register-form'
import { Instructions } from '@/components/auth/Instructions'
const RegisterPage = () => {
  return ( 
      <div className="flex justify-center w-[90%] rounded-lg space-x-8 bg-opacity-95 ">
        <Instructions />
        <RegisterForm /> 
      </div>
    
  );
}
 
export default RegisterPage;