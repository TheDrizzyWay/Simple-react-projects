import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { registerForm } from './formFields';
import './App.css';

const Home = lazy(() => import('./containers/Home'));
const SampleForm = lazy(() => import('./containers/SampleForm'));
const App = () => (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/register"
              render={() => (
                <SampleForm
                  action="register"
                  formTitle="Registration"
                  buttonText="Register"
                  formStructure={registerForm}
                />
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );

export default App;
