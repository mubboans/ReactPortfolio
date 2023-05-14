import React from 'react'

const footer = () => {
    return (
        <footer>
        <div className="surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
            <ul className="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
            <li className="mr-4 mt-3 lg:mt-0"><span className="cursor-pointer text-0">Mubashir Ansari</span></li>
            <li className="mr-4 mt-3 lg:mt-0"><span tabIndex="0" className="cursor-pointer text-0">Research</span></li>
            <li className="mr-4 mt-3 lg:mt-0"><span tabIndex="0" className="cursor-pointer text-0">Design</span></li>
            <li className="mr-4 mt-3 lg:mt-0"><span tabIndex="0" className="cursor-pointer text-0">Develope</span></li></ul>
            <div className="flex align-items-center flex-order-0 lg:flex-order-1">
                <span tabIndex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                     
                    {/* <i className="pi pi-facebook surface-section p-1 text-sm border-circle text-900"></i> */}
                    </span>
                    <span tabIndex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                    <a href='https://www.instagram.com/mubasshirr_ansari_/' target='_blank'><i className="pi pi-instagram surface-section p-1 text-sm border-circle text-900"></i></a>
                       </span>
                       <span tabIndex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                       <a href='https://www.facebook.com/people/Mubashir-Ansari/pfbid02j9GhYJpjYEz8HBnp9gE913y4XwwXRb23ZsbiwcPkpgmMTbgoaSnEUK4v9WMVqS2Vl/?mibextid=ZbWKwL' target='_blank'>
                       <i className="pi pi-facebook surface-section p-1 text-sm border-circle text-900"></i></a>
                       </span>
                       {/* https://github.com/mubboans */}
                        <span tabIndex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                        <a href='https://github.com/mubboans' target='_blank'>
                            <i className="pi pi-github surface-section p-1 text-sm border-circle text-900"></i>
                        </a>
                            </span>
                        <span tabIndex="0" className="cursor-pointer lg:mt-0 block">
                        <a href='https://www.linkedin.com/in/mubashiransari001/' target='_blank'>
                            <i className="pi pi-linkedin surface-section p-1 text-sm border-circle text-900"></i>
                            </a>  
                            </span>
                        </div>
                        </div>
                        </footer>          
    )
}

export default footer