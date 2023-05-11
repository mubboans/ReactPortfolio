import React from 'react'
import { Menubar } from 'primereact/menubar';
import logo from '../../assests/img/log.png'
import './headers.module.css'
function header() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
        },
        
        {
            label: 'About',
            icon: 'pi pi-fw pi-user',
           
        },
        {
            label: 'Resume',
            icon: 'pi pi-fw pi-calendar',
           
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-pencil',
           
        },
    ];
    const start = <img alt="" src={logo} height="50" className="mr-2"></img>;
    // const end = <InputText placeholder="Search" type="text" className="w-full" />;

  return (
    <div className="card">
    <Menubar model={items} start={start}/>
</div>
  )
}

export default header