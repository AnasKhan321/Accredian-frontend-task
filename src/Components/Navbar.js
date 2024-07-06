import { IoIosArrowDown } from "react-icons/io";

export default function Navbar(){
    return(
        <div  className="w-[75%] md:space-y-0 space-y-3  mx-auto mt-5 flex-col md:flex-row  flex justify-between items-center " >

            <div className="flex space-x-4 items-center  flex-col md:flex-row   " > 

            <img src="/Link.png" alt="logo.png" srcSet="" />
            <button className="bg-blue-500 px-3 space-x-2 transition-all hover:bg-blue-600  rounded-md  font-bold  py-1 flex justify-center items-center text-white " >

                <span>Courses</span>  <IoIosArrowDown/>
            </button>

            </div>

            <div className="flex space-x-2 flex-col md:flex-row   md:space-x-6 items-center justify-center " >

                <div  className="cursor-pointer hover:text-gray-500  transition-all font-semibold   " >Refer & Earn </div>
                <div  className="cursor-pointer hover:text-gray-500  transition-all font-semibold  " >Resources </div>
                <div  className="cursor-pointer hover:text-gray-500  transition-all font-semibold  " >About us </div>
                <button className="bg-gray-200 px-3 py-1  rounded-md hover:text-white  hover:bg-blue-500 transition-all   text-black" >Login </button>
                <button  className="bg-blue-500 px-3 py-1  rounded-md   hover:bg-gray-200 transition-all  hover:text-black  text-white" >Try for free</button>

            </div>

               

        </div>
    )
}