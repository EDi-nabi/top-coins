// 1. Go to the https://coinmarketcap.com/api/
// 2. Click "Get your API key now".
// 3. Create an account (there is a free plan).
// 4. Verify your account.
// 5. Copy your API key.
// 6. Paste it in the 'token' field below.
// 7. Rename this file to 'top-coin.config.js'.

export const tcConfig = {
  url:      'https://pro-api.coinmarketcap.com',
  endpoint: '/v1/cryptocurrency/listings/latest',
  token:    'PASTE_YOUR_TOKEN_HERE',
};
