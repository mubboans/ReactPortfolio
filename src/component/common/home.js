import React from 'react'
import { Button } from 'primereact/button';
        
const home = () => {

    const rigthdivStyle = {
       borderRadius: '30px'
    }

  return (
     <div className='card'>
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
     <div className="flex flex-wrap">
        <div className="w-full xl:w-6 p-3 pr-5"><span className="text-indigo-600 font-bold mb-4 block">Mubashir Ansari MERN/MEAN stack developer.</span>
                
        
            <div className="font-bold text-900 text-6xl mb-4">Welcome</div>
            <p className="mt-0 mb-5 text-700 line-height-3 text-xl"> With over 1.5+ years of experience in the field,
                  I offer expertise in building responsive web applications and
                    user interfaces that cater to various industries. <br/>
                    Thank you for visiting my website and feel free to contact me
                     for any inquiries or collaborations.</p>
            <div className="relative w-full xl:w-30rem">
                {/* <button className="p-3 absolute appearance-none p-component border-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer"
                    style ={btnstyle}>Contact Now</button> */}
                  <Button severity="help" className='bg-indigo-500 p-3 hover:bg-indigo-600 active:bg-indigo-700 text-white outline-none h-full cursor-pointer' label="Contact Now" />  
                    </div>
        </div>
        <div className="w-full xl:w-6 p-2 flex justify-content-start bg-indigo-50 lg:p-3 mt-5 xl:mt-0"
            style={rigthdivStyle}>
            <div className="relative w-full" >
 <div className="w-full xl:w-6 p-4 pr-3">
    <span className="text-indigo-600 text-2xl font-bold mb-2 block">Tech skills.</span></div>
                <ul className='justify-content-start '>
                    <li className='flex'> <div className="font-bold text-900 text-1xl mb-4">Programming Languages:</div><span>
                          Angular, React, Express, Node, Java, Javascript, Php, Python 
                        </span></li>
                        <li className='flex'> <div className="font-bold text-900 text-1xl mb-4">Tools and Technologies:</div><span>
                           Android Studio, Visual Studio, Docker, Git. 
                        </span></li>
                        <li className='flex'> <div className="font-bold text-900 text-1xl mb-4">Database:</div><span>
                           MsSQl, MongoDB. 
                        </span></li>

                </ul>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default home