import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import EditButton from './EditButton';
import Heading from './Heading';

const MyProfile = () => {

    const {user} = useSelector((state)=> state.profile)

  return (
    <div className='w-full h-[679px] overflow-y-hidden bg-richblack900'>
        
        <Heading title={"My profile"} heading={"My Profile"}></Heading>

            

        <div className='w-[792px] h-[366px] flex flex-col gap-[44px] ml-[140px] mt-[60px]'>
            <div className='w-[792px] h-[126px] rounded-[8px] p-[24px] flex gap-[20px] bg-richblack800 border-[1px] border-richblack700 items-center'>

                <div className='w-[628px] h-[78px] flex gap-[24px] justify-start'>
                <img src={user.img} className='w-[68px] h-[68px] rounded-[2000px]'></img>
                <div className='w-[526px] h-[50px] flex flex-col gap-[2px] justify-center mt-2 '>
                    <p className='font-inter font-[600] text-[18px] leading-[26px] text-richblack5'>{user.firstName}</p>
                    <p className='font-inter font-[400] text-[14px] leading-[22px] text-richblack300'>{user.email}</p>
                </div>

                </div>
                <EditButton></EditButton>
            </div>

            <div className='w-[792px] h-[220px] rounded-[8px] border-[1px] p-[24px] flex flex-col gap-[20px] border-richblack700 bg-richblack800'>
                <div className='w-[744px] h-[40px] flex gap-[20px] justify-between'>
                    <p className='font-inter font-[600] text-[18px] leading-[26px] text-richblack5'>Personal Details</p>
                    <EditButton></EditButton>
                </div>
                <div className='w-[744px] h-[46px] flex gap-[4px]'>
                    <div className='w-[370px] h-[46px] gap-[2px] flex flex-col'>
                        <p className=' font-inter font-[400] text-[14px] leading-[22px] text-richblack600'>First Name</p>
                        <p className='font-inter font-[500] text-[14px] leading-[22px] text-richblack5'>{user.firstName}</p>
                    </div>
                    <div className='w-[370px] h-[46px] gap-[2px] flex flex-col'>
                        <p className=' font-inter font-[400] text-[14px] leading-[22px] text-richblack600'>Last Name</p>
                        <p className='font-inter font-[500] text-[14px] leading-[22px] text-richblack5'>{user.lastName}</p>
                    </div>

                </div>

                <div className='w-[744px] h-[46px] flex gap-[4px]'>
                    <div className='w-[370px] h-[46px] gap-[2px] flex flex-col'>
                        <p className=' font-inter font-[400] text-[14px] leading-[22px] text-richblack600'>Email</p>
                        <p className='font-inter font-[500] text-[14px] leading-[22px] text-richblack5'>{user.email}</p>
                    </div>
                    <div className='w-[370px] h-[46px] gap-[2px] flex flex-col'>
                        <p className=' font-inter font-[400] text-[14px] leading-[22px] text-richblack600'>Phone Number</p>
                        <p className='font-inter font-[500] text-[14px] leading-[22px] text-richblack5'>(+91)&nbsp; {user.phone}</p>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default MyProfile
