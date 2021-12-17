import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Uploads from './components/upload/image_upload'
export default () => {

    return (
        <Router>
            <Switch>
                <Route path='/' component={Uploads} />
            </Switch>
        </Router>
    )
} 