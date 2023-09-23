import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
                    <RocketLaunchIcon className='icon' />
                        <span>Products</span>
                    </li>
                    <li>
                        <RocketLaunchIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                    <RocketLaunchIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                    <RocketLaunchIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                    <RocketLaunchIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                    <RocketLaunchIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                    <RocketLaunchIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                    <RocketLaunchIcon className='icon' />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                    <RocketLaunchIcon className='icon' />
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