import { Chat } from '@material-ui/icons';
import { Redirect, Route } from 'react-router';
import { Switch } from "react-router-dom";
import NotFound from '../components/not_found';
import AboutUs from '../feature/components/About';

import Courses from '../feature/components/courses';
import ContentCourse from '../feature/components/courses/components/content courses';
import Groups from '../feature/components/groups';
import ContentGroup from '../feature/components/groups/components/content groups';
import Home from '../feature/components/home';
import Learn from '../feature/components/learn';
import Messenger from '../feature/components/messenger';
import Call from '../feature/components/messenger/components/call';
import Profile from '../feature/components/profile';

function Routes(props){
    return (
    <Switch>
        <Redirect from='/' to='/about' exact /> 
        <Route path="/about" component={AboutUs} />
        <Route path="/home" component={Home} />
        <Route path="/khoa-hoc" component={Courses}/>
        <Route path="/nhom" component={Groups}/>
        <Route path="/tin-nhan" component={Messenger}/>
        <Route exact path="/courses/:courseId" component={ContentCourse} />
        <Route exact path="/groups/:groupId" component={ContentGroup} />
        <Route  exact path="/profile" component={Profile}/>
        <Route path="/quiz" component={Learn}/>
        <Route path="/chat" component={Call}/>
        <Route component={NotFound} />
    </Switch>
);
}

export default Routes;
