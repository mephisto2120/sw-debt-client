import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './HeaderStyle.css';
import {AuthState} from 'reducers/types';

// class Header extends Component<AuthProps, AuthState> {
class Header extends Component {
  // renderLinks() {
  //   if (this.props.authenticated) {
  //     return (
  //       <div>
  //         <Link to="/signout">Sign Out</Link>
  //         <Link to="/feature">Feature</Link>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Link to="/signup">Sign Up</Link>
  //         <Link to="/signin">Sign In</Link>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>

        <Link to="/signout">Sign Out</Link>
        <Link to="/feature">Feature</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        {/*{this.renderLinks()}*/}
      </div>
    );
  }
}

function mapStateToProps(state: AuthState) {
  return {authenticated: state.auth.authenticated};
}

// export default connect(mapStateToProps)(Header);
export default Header;