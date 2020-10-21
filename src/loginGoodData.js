import Axios from 'axios';

export async function loginGoodData(client) {
  if (!client.isLoggedIn) {
    throw new Error('Identity Client not logged in!');
  }

  const workspaceSsoUrl = await client.getServiceSsoUrl('dashboards', '/');
  // appSsoURL is to auth into the recordings player.
  const appSsoUrl = await client.getServiceSsoUrl('app', 'https://app.ytica.com/player');

  const urlObj = new URL(workspaceSsoUrl);
  const workspaceEncryptedClaims = urlObj.searchParams.get('sessionId') || '';
  const domain = process.env.NODE_ENV === 'development' ? window.location.origin : urlObj.origin;

  const data = new URLSearchParams({
    targetUrl: '/gdc/account/profile/current',
    ssoProvider: 'ytica',
    encryptedClaims: workspaceEncryptedClaims,
  });

  await Axios.post(`${domain}/gdc/account/customerlogin`, data, {
    withCredentials: true,
    headers: { 'Content-type': 'application/x-www-form-urlencoded' },
  });

  return appSsoUrl;
}