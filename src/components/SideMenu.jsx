
import { NavLink } from 'react-router'
import {
    FiHome,
    FiUser,
    FiBookOpen,
    FiLayers,
    FiBriefcase,
    FiCode,
    FiMail
} from 'react-icons/fi'

function SideMenu() {
    const menus = [
        { path: '/', icon: <FiHome />, name: 'Home' },
        { path: '/about', icon: <FiUser />, name: 'About Me' },
        { path: '/education', icon: <FiBookOpen />, name: 'Education' },
        { path: '/specializations', icon: <FiLayers />, name: 'Specializations' },
        { path: '/projects', icon: <FiBriefcase />, name: 'Projects' },
        { path: '/skills', icon: <FiCode />, name: 'Skills' },
        { path: '/contact', icon: <FiMail />, name: 'Contact Me' }
    ]

    return (
        <nav className="side-menu">
            {menus.map((menu) => (
                <NavLink
                    key={menu.path}
                    to={menu.path}
                    end={menu.path === '/'}
                    className={({ isActive }) =>
                        isActive ? 'menu-link active' : 'menu-link'
                    }
                    title={menu.name}
                >
                    {menu.icon}
                </NavLink>
            ))}
        </nav>
    )
}

export default SideMenu
