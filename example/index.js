import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginOAuth2 from '../src/LoginOAuth2';

const container = document.getElementById('example');
const root = createRoot(container);

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);
# làm 1 hàm để post ai post zo
# call back
root.render(
  <LoginOAuth2
    authorizeUri="https://staging.aixblock.org/o/authorize/"
    responseType="code"
    clientId="25sTUN74v3sCfDiDGIRQxNHrFfEgN855RglYbX4w"
    redirectUri="http://108.181.196.144:8100/hub/oauth_callback"
    scope="identify guilds"
    onSuccess={onSuccess}
    onFailure={onFailure}
    params={{
      prompt: 'consent',
      access_type: 'offline',
    }}
  />,
);
