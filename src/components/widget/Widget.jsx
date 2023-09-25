import { KeyboardArrowUp, PersonOutlineOutlined } from '@mui/icons-material';
import './widget.scss'
const Widget = () => {
    return ( 
        <div className="widget">
            <div className="left">
                <span className="title">USERS</span>
                <span className="counter">2121</span>
                <div className="link">See All Users</div>
            </div>
            <div className="right">
                <div className="percentage postive">
                    <KeyboardArrowUp />
                    20%
                </div>
                <PersonOutlineOutlined className='icon' />
            </div>
        </div>
     );
}
 
export default Widget;