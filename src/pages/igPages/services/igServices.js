import qs from 'query-string';

export default class IgServices {
  login() {
    const notTriggered = sessionStorage.getItem('notTriggered');
    console.log(notTriggered);
    if ( notTriggered == null ) {
      sessionStorage.setItem('notTriggered', false);
      window.location.href = process.env.REACT_APP_IG_AUTH;
    }

    const params = qs.parse(this.props.location.search);
    if (params.code) {
      sessionStorage.setItem('igCode', params.code)
      window.location.href = '/';
    }
  }

  test() {
    console.log('Test');
  }
}
