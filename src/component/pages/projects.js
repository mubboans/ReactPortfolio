import React from 'react'
import img1 from '../../assests/img/feature-timeline-1.png';
import img2 from '../../assests/img/feature-timeline-2.png';
import img3 from '../../assests/img/feature-timeline-3.png';
const projects = () => {
  return (
    <div className='card'>
        <div className="block-content">
    <div>
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8 overflow-hidden">
            <div className="font-bold text-900 text-3xl mb-3 text-center">Explore The Projects</div>
            <div className="text-700 text-center mb-5 line-height-3">Please check some of my portfolio projects and give feedback</div>
            <div className="flex lg:justify-content-center mb-5">
                <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block">
                    <img src={img1} alt="Image" className="w-full mr-8"/></div>
                <div className="flex flex-column align-items-center w-2rem"><span
                        className="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle"
                        style={{minWidth: '2.5rem', minHeight:'2.5rem'}}>1</span>
                    <div className="h-full bg-blue-500" style={{width: '2px',minHeight:'4rem'}}></div>
                </div>
                <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                    <div className="text-900 text-xl mb-2 font-medium"> <a href='https://my-application-2710f.web.app/#/login' className='text-800' target='_blank'>Property Rental Web Application</a> </div><span
                        className="block text-700 line-height-3 mb-3 text-primary-400">MEAN Stack Portfolio Project. Where users can create account and (View/Post) Property</span>
                    <div className="pt-3 border-top-1 border-300">
                        <div className="mb-2 line-height-3"><span className="text-900 font-medium">Front Technology Used: </span>
                           Angular (11.2.14). PrimeNG(UI).</div>
                           <div className="mb-2 line-height-3"><span className="text-900 font-medium">Cloud & Database Used: </span>
                           Cloudinary(Image Storing) , MongoDB Atlas(Database).</div>
                        <div className="line-height-3"><span className="text-900 font-medium">Backend Technology Used: </span> Express , Node JS</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-content-center mb-5">
                <div className="py-3 pl-5 pr-3 lg:pr-8 lg:pl-3 lg:w-30rem flex-order-1 lg:flex-order-0">
                    <div className="text-900 text-xl mb-2 font-medium"><a href='https://myinvoiceapinode.web.app/#/invoice' className='text-800' target='_blank'>Invoice Generator Web Application </a> </div><span
                        className="block text-700 line-height-3 mb-3 text-yellow-400">MEAN Stack Portfolio Project.Where users can create invoice with Customer and also make Payment through Cashfree payment gateway</span>
                    <div className="pt-3 border-top-1 border-300">
                    <div className="mb-2 line-height-3"><span className="text-900 font-medium">Front Technology Used: </span>
                           Angular (11.2.14), PrimeNG(UI).</div>
                        <div className="line-height-3"><span className="text-900 font-medium">Database & Payement Gateway: </span> Mssql (SSMS), Cashfree Payement Gateway.</div>
                        <div className="line-height-3"><span className="text-900 font-medium">Backend Technology Used: </span> Express , Node JS</div>
                    </div>
                 
                </div>
                <div className="flex flex-column align-items-center w-2rem flex-order-0 lg:flex-order-1"><span
                        className="bg-yellow-500 text-0 flex align-items-center justify-content-center border-circle"
                        style={{minWidth:'2.5rem',minHeight:'2.5rem'}}>2</span>
                    <div className="h-full bg-yellow-500" style={{width: '2px', minHeight:'4rem'}}></div>
                </div>
                <div className="py-3 pl-8 pr-3 w-30rem hidden lg:block flex-order-2"><img
                        src={img2} alt="Image" className="w-full mr-8"/></div>
            </div>
            <div className="flex justify-content-center">
                <div className="py-3 pr-8 pl-3 w-30rem hidden lg:block"><img
                        src={img3} alt="Image" className="w-full mr-8"/></div>
                <div className="flex flex-column align-items-center w-2rem"><span
                        className="bg-cyan-500 text-0 flex align-items-center justify-content-center border-circle"
                        style={{minWidth:'2.5rem', minHeight: '2.5rem'}}>3</span>
                    <div className="h-full bg-cyan-500" style={{width:'2px',minHeight:'4rem'}}></div>
                </div>
                <div className="py-3 pl-5 lg:pl-8 pl-3 lg:w-30rem">
                    <div className="text-900 text-xl mb-2 font-medium"> <a className='text-800' href='#'>Portfolio WebSite</a></div><span
                        className="block text-700 line-height-3 mb-3 text-cyan-400">React Portfolio Website .</span>
                    <div className="pt-3 border-top-1 border-300">
                    <div className="mb-2 line-height-3"><span className="text-900 font-medium">Front Technology Used: </span>
                           React (18), PrimeReact(UI).</div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default projects