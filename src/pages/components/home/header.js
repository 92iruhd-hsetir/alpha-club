import React, {useState} from "react";

function Header({ urlBasePath, imageBasePath, menuList }) {
    let [isHamburgerOpened, toggleHamburger] = useState(false);
    const hamburgerToggle = () => {
        toggleHamburger(!isHamburgerOpened);
    }
    const clickMenuItem = (m) => {
        if(isHamburgerOpened){
            hamburgerToggle();
        }
        let target = document.getElementById(m.selector);
        let header = document.getElementById("header");
        if(target) {
            var settings = target.getBoundingClientRect(); //positions of target element
            var pagePosition = window.pageYOffset; //position of current scroll
            var buffer = header.offsetHeight; //header height need to exclude
            window.scroll({ top: (settings.top+pagePosition-buffer),  left: 0,  behavior: 'smooth' });
        }
        return null;
    }

    return (
        <header id="header" className="main__container--fluid header__wrap aos-init" data-aos="fade-up">
            <div className="main__container">
                <div className="header__box">
                    <div className="header__logo">
                        <a href={urlBasePath}>
                            <img src={`${imageBasePath}logo.jpg`} alt="Alpha Book Writers Club" title="Alpha Book Writers Club" />
                        </a>
                    </div>
                    <div id="myNavbar" className={`header__nav ${isHamburgerOpened ? 'active' : ''}`}>
                        <ul>
                            {
                                menuList.map((m, idx) => {
                                    return (
                                        <li key={idx}>
                                            {
                                                m.isPageRoute ?
                                                    <a href={m.route}>{m.name}</a>:
                                                    <a className="page-scroll" onClick={() => clickMenuItem(m)}>{m.name}</a>
                                            }
                                            
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* <!-- HAMBURGER MENU --> */}
                    <div className={`header__hamburger-menu ${isHamburgerOpened ? 'active' : ''}`} id="hamburger-menu" onClick={hamburgerToggle}>
                        <div className="menu-bar1"></div>
                        <div className="menu-bar2"></div>
                        <div className="menu-bar3"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;