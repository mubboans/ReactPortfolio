import React from 'react'
import backgroundImage from '../../assests/img/testimonials-8.png';
const about = () => {
    const btntryforfree = {
        height: '114.479px', width: '114.479px'
    }
    return (
        <div className='card mb-3'>
     
    <div className="block-content">
        <div>
            <section className="flex flex-column lg:flex-row justify-content-between align-items-center surface-section">
            <article className="w-full bg-cover flex align-items-end p-6 ml-3 bg-center"
                    style={{backgroundImage: `url(${backgroundImage})`, height:'40rem'}}>
                        {/* ,filter:'blur(5px)' backdropFilter:'blur(12.25px)', */}
                    <div className="flex flex-column gap-5 border-round-lg p-3 w-full"
                        style={{background:'rgba(255, 255, 255, 0.15)',border: '1px solid rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(12.5px)'}}>
                        <p className="m-0 text-0 text-2xl line-height-3 font-semibold text-center text-white">“
                        I am a software engineer with expertise working with a variety of tech stacks. I have a keen interest in backend engineering and Web apps.
                            ”</p>
                        <div className="flex gap-3 align-items-center">
                            <hr className="w-full" style={{border: '1px solid rgba(222, 226, 230, 0.15)'}}/>
                            <div className="flex align-items-center gap-2"><i className="pi pi-star-fill text-white"></i><i
                                    className="pi pi-star-fill text-white"></i><i className="pi pi-star-fill text-white"></i><i
                                    className="pi pi-star-fill text-white"></i><i className="pi pi-star-fill text-white"></i>
                            </div>
                            <hr className="w-full" style={{border:'1px solid rgba(222, 226, 230, 0.15)'}}/>
                        </div>
                        <div className="flex justify-content-between">
                            <div className="flex flex-column gap-1">
                                <p className="mt-0 mb-0 font-semibold line-height-3 text-base text-white">Mubashir Ansari</p>
                                <span className="text-50 font-light line-height-3 text-sm text-white-alpha-80">CEO &amp;
                                    Co-Founder of Hyper</span>
                            </div>
                            <div className="flex align-items-center gap-2"><button
                                    className="p-button p-component p-button-rounded bg-white-alpha-10 text-white p-button-icon-only"
                                    style={{border: '1px solid rgba(255, 255, 255, 0.15)'}}><span
                                        className="p-button-icon p-c pi pi-arrow-left"></span><span
                                        className="p-button-label p-c">&nbsp;</span><span role="presentation" className="p-ink"
                                        style={{height: '48px',width: '48px'}}></span></button><button
                                    className="p-button p-component p-button-rounded bg-white-alpha-10 text-white p-button-icon-only"
                                    style={{border: '1px solid rgba(255, 255, 255, 0.15)'}}><span
                                        className="p-button-icon p-c pi pi-arrow-right"></span><span
                                        className="p-button-label p-c">&nbsp;</span><span role="presentation" className="p-ink"
                                        style={{height: '48px',width: '48px'}}></span></button></div>
                        </div>
                    </div>
                   
                </article>
                <article className="flex flex-column w-full gap-5 px-4 py-8 md:px-6 lg:px-8">
                    <h1 className="m-0 text-900 font-bold text-6xl">About Me</h1>
                    <div className="flex flex-column gap-4">
                        <div className="flex align-items-center gap-2"><i
                                className="pi pi-check-circle text-primary-500 text-2xl"></i>
                            <p className="mt-0 mb-0 text-base text-700 line-height-3 text-primary-500">Research
                            </p>
                        </div>
                        {/* <div className='grid'>
                        <div className="col-12 lg:col-4 p-3">
    <div className="shadow-2 surface-card p-3" style={{borderRadius: '12px'}}>
        <div className="flex align-items-center justify-content-between">
            <div><span className="text-3xl text-900 font-bold">40K</span>
                <p className="mt-1 mb-0 text-600 text-xl">Users Online</p>
            </div>
            <div><img src="../../assests/img/about1.svg" alt="stats-illustration-4"/></div>
        </div>
    </div>
</div>
                        </div> */}
                        <div className="flex align-items-center gap-2"><i
                                className="pi pi-check-circle text-primary-500 text-2xl"></i>
                            <p className="mt-0 mb-0 text-base text-700 line-height-3 text-primary-500">Design</p>
                        </div>
                        <div className="flex align-items-center gap-2"><i
                                className="pi pi-check-circle text-primary-500 text-2xl"></i>
                            <p className="mt-0 mb-0 text-base text-700 line-height-3 text-primary-500">Develop</p>
                        </div>
                    </div>
                    {/* <div className="flex align-items-center gap-3"><button aria-label="Try it free"
                            className="p-button p-component p-button-outlined"><span className="p-button-label p-c">Try it
                                free</span><span role="presentation" className="p-ink"
                                style={btntryforfree}></span></button><button
                            aria-label="Upgrade now" className="p-button p-component"><span
                                className="p-button-icon p-c p-button-icon-right pi pi-bolt"></span><span
                                className="p-button-label p-c">Upgrade now</span><span role="presentation" className="p-ink"
                                style={{height:'166.906px',width:'166.906px'}}></span></button></div> */}
                </article>
                
            </section>
        </div>
    </div>

        </div>
    )
}

export default about