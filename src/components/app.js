import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Index from "./index"
import Header from "./header"
import NoMatch from "./noMatch"

import 'antd/dist/antd.min.css';
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
      //动态获取路由
      <Route path=":page/:id" getComponent={function (nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require("./"+nextState.params.page).default)
        })
      }}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById("webRoot")
);