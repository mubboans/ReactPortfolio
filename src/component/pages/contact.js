import React, { useState,useRef }from 'react';
import img1 from '../../assests/img/contact-1.png';
import { Toast } from 'primereact/toast';
import axios from 'axios';
const Contact = () => {
    const toastBL = useRef(null);
    const showBottomLeft = () => {
        toastBL.current.show({ severity: 'success', summary: 'Message send Successfully', detail: 'You will notify by admin', life: 3000 });
    };
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact:"",
        message: "",
      });
     const SENDGRID_API_KEY = "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"
      const handleSubmit =async (e) => {
        e.preventDefault();
        const name = formData.name;
        const email = formData.email;
        const contact = formData.contact;
        const message = formData.message;
        try {
            const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
              personalizations: [
                {
                  to: [
                    {
                      email: 'RECIPIENT_EMAIL_ADDRESS'
                    }
                  ]
                }
              ],
              from: {
                email: 'YOUR_EMAIL_ADDRESS'
              },
              subject: 'New message from your website',
              content: [
                {
                  type: 'text/plain',
                  value: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nContact:${contact}`
                }
              ],
              headers: {
                Authorization: `Bearer ${SENDGRID_API_KEY}`
              }
            });
      
            if (response.status === 202) {
          console.log('send 46');
            } else {
              console.log('else 48');
            }
          } catch (error) {
            console.log(error,'51');
           
          }

      
        showBottomLeft();
        // Do something with the data
        console.log(name, email,contact,message);
      };
  return (
    <div className='card'>
        <div className="block-content">
    <div>
        <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div className="grid">
                <div className="col-12 md:col-6">
                    <form onSubmit={handleSubmit}>
                    <div className="p-fluid pr-0 md:pr-6">
                        <div className="field"><label for="name" className="font-medium">Name</label>
                        <input id="name" className="p-inputtext p-component py-3 px-2 text-lg" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} /></div>
                        <div className="field"><label for="email1" className="font-medium">Email</label>
                        <input id="email1" className="p-inputtext p-component py-3 px-2 text-lg"  value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}/></div>
                        <div className="field"><label for="company" className="font-medium">Contact</label>
                        <input id="company" className="p-inputtext p-component py-3 px-2 text-lg"  value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}/></div>
                        <div className="field"><label for="message" className="font-medium">Message</label>
                        <textarea id="message" rows="6" className="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable py-3 px-2 text-lg"
                                style={{overflow: 'hidden', height: '176px'}}  value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}>
                                    </textarea></div><button type='submit'
                            aria-label="Send Message" className="p-button p-component w-auto"> <span
                                className="p-button-icon p-c p-button-icon-left pi pi-send"></span><span
                                className="p-button-label p-c">Send Message</span><span role="presentation" className="p-ink"
                                style={{height: '172.177px', width:'172.177px'}}></span></button>
                    </div>
                    </form>
                </div>
                <div className="col-12 md:col-6 bg-no-repeat bg-right-bottom"
                    style={{backgroundImage: `url(${img1})`}}>
                    <div className="text-900 text-2xl font-medium mb-6">Contact Us</div>
                    <div className="text-700 line-height-3 mb-6">Lets discuss how can i help</div><a
                        className="inline-flex align-items-center text-blue-600 font-bold no-underline cursor-pointer"><span
                            className="mr-3">Get in touch directly</span><i className="pi pi-arrow-right"></i></a>
                    <ul className="list-none p-0 m-0 mt-6 text-700">
                        <li className="flex align-items-center mb-3"><i className="pi pi-phone mr-2"></i><span>+91 8693045277</span>
                        </li>
                        <li className="flex align-items-center mb-3"><a className='text-700' href='https://www.linkedin.com/in/mubashiransari001'>
                        <i className="pi pi-linkedin mr-2"></i>
                            <span>Connect Me</span></a></li>
                        <li className="flex align-items-center"><i
                                className="pi pi-inbox mr-2"></i><span>tpsmubasir@gmail.com</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <Toast ref={toastBL} position="bottom-right" />
</div>
    </div>
  )
}

export default Contact