import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'; // eslint-disable-line

export default function GoogleAuth() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if(credentialResponse.credential) {
            console.log(jwt_decode(credentialResponse.credential)); // eslint-disable-line
          }
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
