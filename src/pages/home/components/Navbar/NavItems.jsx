import React from 'react'
import links from './Links'
import NavLinks from './NavLinks';
import { useLocation } from 'react-router-dom';
import theme from '../../../../design-system/config';

export default function NavItems() {
    const items=links();
    const route=useLocation()
    return items.map((item)=>{
                return (
                    <NavLinks color={route.pathname=== item.navLink ? theme.active : theme.white} key={item.id} {...item}/>
                  )}
        )
    }

 

