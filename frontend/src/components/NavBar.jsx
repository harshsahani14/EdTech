import React, { useEffect, useState } from 'react'
import websiteLogo from '../assets/images/websiteLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BsCart3 } from "react-icons/bs";
import { apiCall } from '../apis/apiCall'
import {categoryApiURL} from '../apis/apiUrl'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {

  const {token} = useSelector(state => state.auth)
  const {user} = useSelector(state => state.profile)
  const {totalItems} = useSelector(state => state.cart)

  // const [categories,setCategories] = useState([])
  var categories = []


  const fetchCategories = async ()=>{

    try{
      const result = await apiCall('GET',categoryApiURL.getAll)
      console.log(result.data.category)
      // setCategories([...result.data.category])
      categories = [...result.data.category]
      console.log(categories)  
    }
    catch(e){
      console.log(e.message)
    }
  }
  useEffect( ()=>{
      fetchCategories()
  },[])

  return (
    <div className=' flex items-center w-full h-[56px] border-b-[1px] border-richblack600 bg-richblack900  gap-[32px] justify-around relative '>

        <Link to={"/"}>
            <img src={websiteLogo} width={160} height={32} className='absolute left-[200px] top-3'></img>
        </Link>
      
      <div className=' flex justify-end w-[476px] h-[32px] gap-[30px] '>
            <NavLink to={"/"} style={({isActive})=>({
                color : isActive ? "#FFD60A" : "#F1F2FF"
            })} className=" font-[600] text-[16px] leading-[24px] ">Home</NavLink>
            
            <div className=' flex gap-2 relative w-[74px] h-[32px] cursor-pointer group '>
                <p className=' font-[600] text-[16px] leading-[24px] text-richblack5'>Catalog</p>
                <MdOutlineKeyboardArrowDown className=' text-richblack5 absolute bottom-3 right-0' />
                
                <div className=' invisible flex flex-col w-[280px] h-fit group-hover:visible bg-richblack5 absolute top-10 right-[-120px] opacity-0 group-hover:opacity-100 transition-all duration-300 px-[15px]  py-[15px] rounded-md '>
                        <div className=' w-14 h-14 bg-richblack5  top-0 right-[99px] rotate-45 absolute   rounded-sm z-0 '></div>
                        
                        <Link to={`/categories/python`} className=' w-full h-[50px] text-richblack900 text-[16px] flex font-[600] items-center text-left pl-[13px]  hover:bg-richblack50 rounded-md z-10'>
                            <div>Python</div>
                        </Link>
                        <Link to={`/categories/devops`} className=' w-full h-[50px] text-richblack900 text-[16px] flex font-[600] items-center text-left pl-[13px]  hover:bg-richblack50 rounded-md z-10'>
                        <div>Devops</div>
                        </Link>
                      
                    
                </div>
            </div>
            
            
            <NavLink to={"/aboutus"} style={({isActive})=>({
                color : isActive ? "#FFD60A" : "#F1F2FF"
            })} className=" font-[600] text-[16px] leading-[24px] ">About Us</NavLink>
            
            
            <NavLink to={"/contactus"} style={({isActive})=>({
                    color : isActive ? "#FFD60A" : "#F1F2FF"
            })} className=" font-[600] text-[16px] leading-[24px]">Contact Us</NavLink>
            
      </div>

      <div className=' w-[160px] h-[29.88px] flex flex-end gap-[20px] items-center'>
            {
               (token!=null && token.role == "student") ? (<BsCart3 className='relative'>

                  {
                      totalItems>0 ? (<div>{totalItems}</div>) : (<div className=' hidden'></div>)
                  }
               </BsCart3>) : 
               (<Link to={"/login"}>
                    <button className=' w-[78px] h-[40px] bg-richblack700 border-1 border-richblack600 rounded-[8px] text-richblack5'   >Log in</button>
                </Link>)
            }

            {
              (token!=null ) ? (<img></img>) : (<Link to={"/signup"}>

                <button className=' w-[78px] h-[40px] bg-richblack700 border-1 border-richblack600 rounded-[8px] text-richblack5'> Sign up</button>
              </Link>)
            }
      </div>
      

    </div>
  )
}

export default NavBar
