
import { IoIosArrowForward } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";

export default function Section3({setopen}){
    return(
        <div className=" p-1  md:p-6 mt-10 flex flex-col items-center justify-center  space-y-10    "  > 


        <h2 className="font-bold text-center text-xl  " > What Are The   <b className="text-blue-500 " >Referral Benefits ? </b>  </h2>

    <div className="items flex w-[75%] flex-col md:flex-row  space-x-5 justify-between items-center  my-5 ">


        <div className="md:w-1/4  w-3/4  shadow-xl p-2" >
            
        <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="text-left md:py-3 md:px-4 py-1 px-2  uppercase font-semibold text-sm  flex items-center justify-between ">All Programs 
            <IoIosArrowForward/>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center justify-between hover:bg-blue-500 transition-all hover:text-white   cursor-pointer    ">
             Product Managment <IoIosArrowForward/>
            </td>
          </tr>
          <tr className="border-t bg-gray-100">
            <td className="text-left md:py-3 md:px-4 py-1 px-2   flex items-center justify-between hover:bg-blue-500 transition-all hover:text-white   cursor-pointer  ">
              Strategy & Leadership    <IoIosArrowForward/>
            </td>
          </tr>
          <tr className="border-t">
            <td className="text-left md:py-3 md:px-4 py-1 px-2   flex items-center justify-between hover:bg-blue-500 transition-all hover:text-white  cursor-pointer   ">
              Business & Management  <IoIosArrowForward/>
            </td>
          </tr>
          <tr className="border-t bg-gray-100">
            <td className="text-left md:py-3 md:px-4 py-1 px-2   flex items-center justify-between hover:bg-blue-500 transition-all hover:text-white   cursor-pointer  ">
            FINTECH   <IoIosArrowForward/>
            </td>
          </tr>
          <tr className="border-t">
            <td className="text-left md:py-3 md:px-4 py-1 px-2   flex items-center justify-between  hover:bg-blue-500 transition-all hover:text-white    cursor-pointer  ">
            Senior Management   <IoIosArrowForward/>
            </td>
          </tr>
          <tr className="border-t bg-gray-100">
            <td className="text-left md:py-3 md:px-4 py-1 px-2   flex items-center justify-between hover:bg-blue-500 transition-all hover:text-white  cursor-pointer   ">
            DATA SCIENCE   <IoIosArrowForward/>
            </td>
          </tr>
          <tr className="border-t">
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center justify-between hover:bg-blue-500 transition-all hover:text-white    cursor-pointer ">
                    BUSINESS ANALYTICS  <IoIosArrowForward/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

        </div> 

        <div className="md:w-3/4 w-4/4 shadow-xl "> 
            
        <div className="overflow-x-auto  shadow-xl ">
        <table className="min-w-full bg-white shadow-xl border-collapse  rounded-md p-4 ">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="text-left md:py-3 md:px-4 py-1 px-2  uppercase font-semibold text-sm  border-r border-gray-300 ">Programs</th>
            <th className="text-left md:py-3 md:px-4 py-1 px-2  uppercase font-semibold text-sm  border-r border-gray-300 ">Referral Bonus</th>
            <th className="text-left md:py-3 md:px-4 py-1 px-2  uppercase font-semibold text-sm">Referral Bonus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center space-x-2  border-r border-gray-300 ">
              <FaGraduationCap className="mx-2 text-xl text-blue-800" />
              Professional Certificate Program in Product Management
            </td>
            <td className="text-left  md:py-3 md:px-4 py-1 px-2  border-r border-gray-300  border-gray-400">₹7000</td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2 ">₹9000</td>
          </tr>
          <tr>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center space-x-2  border-r border-gray-300 ">
              <FaGraduationCap className="mx-2 text-xl text-blue-800" />
              PG Certificate Program in Strategic Product Management
            </td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2   border-r border-gray-300 ">₹9000</td>
            <td className="text-left  md:py-3 md:px-4 py-1 px-2 ">₹11000</td>
          </tr>
          <tr>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center space-x-2  border-r border-gray-300 ">
              <FaGraduationCap className="mx-2 text-xl text-blue-800" />
              Executive Program in Data Driven Product Management
            </td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  border-r border-gray-300 ">₹10000</td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2   ">₹10000</td>
          </tr>
          <tr>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center space-x-2  border-r border-gray-300 ">
              <FaGraduationCap className="mx-2 text-xl text-blue-800" />
              Executive Program in Product Management and Digital Transformation
            </td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2   border-r border-gray-300 ">₹10000</td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  ">₹10000</td>
          </tr>
          <tr>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center space-x-2  border-r border-gray-300 ">
              <FaGraduationCap className="mx-2 text-xl text-blue-800" />
              Executive Program in Product Management
            </td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  border-r border-gray-300 ">₹10000</td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2 ">₹10000</td>
          </tr>
          <tr>
            <td className="text-left md:py-3 md:px-4 py-1 px-2 4 flex items-center space-x-2  border-r border-gray-300 ">
              <FaGraduationCap className="mx-2 text-xl text-blue-800" />
              Advanced Certification in Product Management
            </td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2   border-r border-gray-300 ">₹10000</td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2 ">₹10000</td>
          </tr>
          <tr>
            <td className="text-left md:py-3 md:px-4 py-1 px-2  flex items-center space-x-2  border-r border-gray-300 ">
              <FaGraduationCap className="mx-2 text-xl text-blue-800" />
              Executive Program in Product Management and Project Management
            </td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2   border-r border-gray-300 ">₹10000</td>
            <td className="text-left md:py-3 md:px-4 py-1 px-2 ">₹10000</td>
          </tr>
        </tbody>
      </table>
    </div>
                        
        </div> 

    </div>






    
    <button className="text-white py-2 mx-auto    w-1/4  bg-blue-500 transition-all hover:bg-gray-200 hover:text-black  rounded-md " onClick={()=>{setopen(true)}} > Refer Now </button>


</div> 
    )
}