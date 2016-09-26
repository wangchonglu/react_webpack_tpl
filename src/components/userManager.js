/**
 * Created by chonglu.wang on 2016/9/19.
 */
import React from "react"
import imageLogo from '../images/y18.gif'

export default class UserManager extends React.Component {

  componentDidMount(){
      //
  }

  render() {
    return (
      <div>
       人员管理  参数：{this.props.params.id}
      </div>
    );
  }
}