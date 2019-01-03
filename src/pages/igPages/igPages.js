import React, { Component } from 'react';
import qs from 'query-string';

export default class IgPages extends Component {
  constructor(props) {
    super(props);

    this.login();
  }
  login() {

    if (sessionStorage.getItem('igToken') == null) {
      const params = qs.parse(this.props.location.hash);
      if (params.access_token) {
        sessionStorage.setItem('igToken', params.access_token);
        fetch('https://api.instagram.com/v1/self/media/recent?access_token=' +sessionStorage.getItem('igToken') + '&callback=callbackFunction', {
          method: 'GET'
        })
        .then(res => {console.log(res)});
        // window.location.href = '/';
      }
      else {
        window.location.href = process.env.REACT_APP_IG_AUTH;
      }
    }
  }

  render() {
    console.log(sessionStorage.getItem('igToken'));
    return (
      <div></div>
    );
  }
}
