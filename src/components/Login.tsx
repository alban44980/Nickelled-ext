import React from 'react';
import GoogleLogin from 'react-google-login';

function Login() {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="490546957790-994tkfrvr29lvafup2gscq9chtocvm5g.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default Login;
