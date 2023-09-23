import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StoreIcon from '@mui/icons-material/Store';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {MdStore,MdOutlineDeliveryDining,MdNotificationsActive,
    MdOutlineHealthAndSafety,MdSettingsSuggest} from 'react-icons/md'
import {FiPackage} from 'react-icons/fi'
import {TbReportSearch} from 'react-icons/tb'
import {ImStatsBars2} from 'react-icons/im'
import {PiUserLight} from 'react-icons/pi'

import './sidebar.scss'


const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="top">
                <span className="logo">Lamdadmin</span>
                </div>
                <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <SpaceDashboardIcon  className='icon'/>
                        <span>Dashbaord</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <PeopleAltOutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    <li>
                    <MdStore className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <FiPackage className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                    <MdOutlineDeliveryDining className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                    <ImStatsBars2 className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                    <MdNotificationsActive className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                    <MdOutlineHealthAndSafety className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                    <TbReportSearch className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                    <MdSettingsSuggest className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                    <PiUserLight className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                    <ExitToAppIcon className='icon' />
                        <span>Logout</span>
                    </li>
                    
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
     );
}
 
export default Sidebar;