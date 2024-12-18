import React, { useState } from 'react'
import Button from '../components/Button'
import './LoginPage.css'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import loginPageBg from '../assets/images/loginPageFrame.png'
import loginPagePhoto1 from '../assets/images/loginPagePhoto1.png'
import loginPagePhoto2 from '../assets/images/loginPagePhoto2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/common/Loader'
import { setLoading, setToken } from '../slices/authSlice';
import { setUserImg, setUser } from '../slices/profileSlice';
import { apiCall } from '../apis/apiCall';
import { authApiUrl } from '../apis/apiUrl';
import {toast} from "react-hot-toast"
import { setItemWithExpiry, setLocalStorage } from '../apis/localStorage';

const LoginPage = () => {

    const [userType,setUserType] = useState('student');
    const [showPass,setShowPass] = useState(false);
    const {loading} = useSelector(state=> state.auth);
    const dispatch = useDispatch()
    const [form,setForm] = useState(
        {
            email:"",
            password:""
        }
    )

    const navigate = useNavigate()

    const clickHandler = async  () => {

        dispatch(setLoading(true));

        try{

            const result = await apiCall("POST",authApiUrl.login,form);


            
            setItemWithExpiry("token",JSON.stringify(result.data.token),86400000)
            dispatch(setToken(JSON.stringify(result.data.token)))

            const userImg = result.data.user.img ? result.data.user.img : `https://api.dicebear.com/5.x/initials/svg?seed=${result.data.user.firstName} ${result.data.user.firstName}`

            dispatch(setUser({...result.data.user,img:userImg}))
            // localStorage.setItem("user",JSON.stringify({...result.data.user}))
            setItemWithExpiry("user",{...result.data.user},86400000)
            
            toast.success(<p className='font-inter font-[400] text-[16px] '>Login Sucessful</p>)
            navigate("/dashboard/myProfile")
        }
        catch(e){
            console.log(e.message);
            toast.error("Login failed")
        }

        dispatch(setLoading(false))

    }

    function changeHandler(event){

        setForm((form)=>{
    
          return{
            ...form,
            [event.target.name]: event.target.value
          }
        })
    }

  return (
    
    <div className=' bg-richblack900 w-full h-[679px] flex gap-[100px] justify-center items-center overflow-hidden'>
        
        {
            loading ? (<Loader></Loader>) : (

                <div className='bg-richblack900 w-full h-[679px] flex gap-[100px] justify-center items-center overflow-hidden'>
                         <div className=' flex flex-col w-[508px] h-[562px] top-[174px] left-[120px] p-[32px] gap-[36px] '>

                        <div className=' w-[444px] h-[100px] flex flex-col gap-[12px]'
                        >
                                <h1 className=' font-inter text-richblack5 font-[600] text-[30px] leading-[38px] text-left'> Welcome Back</h1>
                                <p className=' font-inter font-[400] text-[18px] leading-[26px] text-richblack300 text-left'>  
                                    {
                                        userType === 'student' ? `Build skills for today, tomorrow, and beyond.` : 'Discover your passions.'
                                    }
                                    {
                                        userType === 'student' ? (<span className='font-[700] text-[16px] leading-[24px] text-blue200 font-edu'>Education to your future proof career</span>) : (<p className='font-[700] text-[16px] leading-[24px] text-blue200 font-edu'> Be unstoppable</p>)
                                    }
                                </p>
                            </div>

                            <div className=' flex gap-[5px] w-[230px] h-[44px] bg-richblack800 p-[4px] rounded-[500px] shadow-toggle font-inter '>
                                <div className={` w-[97px] h-[36px] rounded-[100px] py-[6px] px-[18px] font-[500] text-[16px] leading-[24px] text-richblack5 cursor-pointer duration-200 ${userType=='student' ? 'bg-richblack900' : ''} ease-in-out`} onClick={()=> {setUserType("student")} }> Student</div>
                                <div className={`w-[120px] h-[36px] rounded-[100px] px-[18px] py-[6px] font-[500] text-[16px] leading-[24px] text-richblack5 cursor-pointer ${ userType=='instructor' ? 'bg-richblack900' : ''} duration-200 ease-in-out text-center`} onClick={()=>{setUserType("instructor")}}> Instructor</div>
                            </div>

                            <form >
                                <label for="emailId" className=' font-inter text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[330px]  flex mb-[10px]'>Email Address <div className='ml-[5px] text-pink200'>*</div></label>
                                <input type="text" id="email" name="email" className='mr-[200px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 font-inter' onChange={changeHandler} placeholder='Enter email address' required></input><br></br><br></br>
                                <div className=' font-inter text-left font-[400] text-[14px] leading-[22px] text-richblack5 mr-[340px]  flex mb-[10px]'>Password <div className='ml-[5px] text-pink200'>*</div></div>
                                <div className=' relative h-[102px] mb-[-56px]'>
                                        <input type={`${ showPass ? 'text' : 'password' }`} id="password" name="password" className='mr-[200px] w-[444px] h-[48px] rounded-[8px] p-[12px] gap-[12px] bg-richblack800 shadow-toggle text-richblack200 mb-[10px] absolute z-[10] left-[1px] font-inter' onChange={changeHandler}  placeholder='Enter Password' required></input>
                                        {
                                            showPass ? (<FiEyeOff className=' z-[20] absolute right-3 top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowPass(false)}}/>) : (<FiEye className='z-[20] absolute right-3 top-4 text-richblack200 cursor-pointer' onClick={()=>{setShowPass(true)}}></FiEye>)
                                        }
                                        <Link to={'/forgotpassword'} className=' font-inter absolute font-[600] text-[12px] leading-[20px]  text-blue200 bottom-7 right-0 cursor-pointer'>Forgot password</Link>
                                        
                                </div><br></br><br></br>
                                <Button content={'Sign in'} isYellow={true} hasArrow={false} width={444}  onClick={clickHandler}></Button>
                                
                            </form>


                            </div>


                            <div className=' w-[600px] h-[550px] relative'>
                            <img src={ `${ userType==='student' ? loginPagePhoto1 : loginPagePhoto2}`  } className={`  w-[558px] h-[508px]  absolute z-20 right-12`}></img>
                            <img src={loginPageBg} className={` absolute z-10 w-[558px] h-[508px] bottom-5 right-6  `}></img>
                            </div>
                 </div>   
            )
        }
    </div>
  )
}

export default LoginPage
