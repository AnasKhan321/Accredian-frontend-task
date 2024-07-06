import { HiUserAdd } from "react-icons/hi";
import { FaFilePen } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
export default function Section2({setopen}){


       return(
        <div className="bg-blue-100  p-6 mt-12  flex flex-col items-center justify-center  space-y-20    "  > 


                <h2 className="font-bold text-center text-xl  " > How Do I   <b className="text-blue-500 " >Refer?</b>  </h2>

            <div className="items w-[90%]   md:w-[75%] flex-col md:flex-row   mx-auto flex justify-between items-center  my-5 ">


                <div className="item w-4/4  md:w-1/4   my-2 cursor-pointer transition-all hover:bg-white   p-[4rem] text-center  flex flex-col items-center justify-center bg-blue-50  rounded-full shadow-2xl  ">
                    <HiUserAdd className="text-blue-500 text-8xl" /> 
                    <p>Submit referrals easily via our website’s referral section.</p>

                </div>
                <div className="item w-4/4  md:w-1/4 my-2   cursor-pointer transition-all hover:bg-white   p-[4rem] text-center  flex flex-col items-center justify-center bg-blue-50  rounded-full shadow-2xl    ">
                    <FaFilePen className="text-blue-500 text-8xl" /> 
                    <p>Earn rewards once your referral joins an Accredian program.</p>

                </div>


                <div className="item w-4/4   my-2  md:w-1/4  cursor-pointer transition-all hover:bg-white  p-[4rem] text-center  flex flex-col items-center justify-center bg-blue-50  rounded-full shadow-2xl   ">
                    <RiMoneyDollarBoxFill className="text-blue-500 text-8xl" /> 
                    <p>Both parties receive a bonus 30 days after program enrollment.</p>

                </div>


            </div>






            
            <button className="text-white py-2 mx-auto md:w-1/4     w-3/4  bg-blue-500 transition-all hover:bg-gray-200 hover:text-black  rounded-md " onClick={()=>{setopen(true)}} > Refer Now </button>


        </div> 
       )

}