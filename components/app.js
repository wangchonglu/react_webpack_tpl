import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute,hashHistory  } from 'react-router'

import Index from "./index"
import Header from "./header"
import RoleManager from "./roleManager"
import UserManager from "./userManager"
import NoMatch from "./noMatch"

import '../css/app.scss'

//app
const App = React.createClass({

  componentWillReceiveProps (prevProps) {

  },
  componentDidUpdate (prevProps) {

  },
  render() {
    return (
      <div>
        <Header />
        <div id="content">{this.props.children}</div>
      </div>
    )
  }
});

//路由
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/> //默认首页
      <Route path="index" component={Index}/>
      <Route path="roleManager/:id" component={RoleManager}/>
      <Route path="userManager/:id" component={UserManager}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById("webRoot")
);