/**
 * Created by chonglu.wang on 2016/9/19.
 */
import React from "react"
import {Link} from 'react-router'
import '../css/header.scss'

export default class Header extends React.Component {

  render() {
    return (
        <div id="topBar">
          <ul className="navHeader clearfix">
            <li className="item"><Link to="/index" activeClassName="selected">首页</Link></li>
            <li className="item"><Link to="/userManager/123" activeClassName="selected">人员管理</Link></li>
            <li className="item"><Link to="/roleManager/abc" activeClassName="selected">权限管理</Link></li>
          </ul>
        </div>
    );
  }
}