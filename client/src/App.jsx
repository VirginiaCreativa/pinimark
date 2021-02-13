import { BrowserRouter as Router } from 'react-router-dom';
import { history } from './redux/store/store';

const App = () => {
  return (
    <>
      <Router history={history}>
        <h1>Virginia Velásquez Soto v2</h1>
      </Router>
    </>
  );
};

export default App;
