import React,{useState} from 'react'
import './header.css'
import MobileHeader from './mobile/mobile-header'
import WebHeader from './web/web-header'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
                My Portfolio
            </div>
            <div className="menu">
                <div className="web-menu">
                    <WebHeader/>
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <i class="fas fa-bars menu-icon"></i>
                    </div>
                    {isOpen && <MobileHeader isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
