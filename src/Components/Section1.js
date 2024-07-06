export default function Section1({setopen}){


    return( 
        <div  className=" w-[90%] md:w-[75%]  mx-auto  mt-10  " >
            
                <div className="w-[90%] md:w-[70%]  mx-auto   flex items-center justify-around bg-blue-100 rounded-2xl   py-2  " >
                    
                    <div className="text-blue-500  " >Refer </div>
                    <div  className="text-gray-700 " >benefits </div>    
                    <div  className="text-gray-700 " >FAQs</div>    
                    <div  className="text-gray-700 " >Support</div>    

                    
                </div>

                <div className=" mt-5 p-5 bg-blue-100  flex  justify-between rounded-md  items-center shadow-lg  " > 

                    <div className="section1 w-1/2   space-y-8 ">

                            <h2 className="font-bold text-wrap text-black  text-2xl md:text-8xl " >
                            Let’s Learn & Earn
                            </h2>

                            <p className="text-gray-800  text-xl md:text-6xl  " >
                            Get a chance to win 
                            up-to  <b className="text-blue-500 text-2xl  md:text-7xl  " > Rs. 15,000 </b>  
                            </p>

                            <button className="text-white py-2  w-full md:w-1/3  bg-blue-500 transition-all hover:bg-gray-200 hover:text-black  rounded-md " onClick={()=>{setopen(true)}} > Refer Now </button>


                    </div>
                    <div className="section2 w-1/2 flex justify-end">

                        <img src="/section1.png" alt="image" srcSet=""  className="w-[600px]" />

                    </div>
                    
                    
                </div> 
            
            
        </div>
    )
}