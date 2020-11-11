# Plugin - Automated logging into Flex Insights

- `git clone git@github.com:twilio-professional-services/plugin-good-data.git`
- `cd plugin-good-data`
- `cp public/appConfig.example.js public/appConfig.js`
- Open `public/appConfig.js` and add the `accountSID` from the PMI dev project you will be doing the local development on
- `npm i`
- For local development only: within `GoodDataPlugin.js` locate the iframe section and change the src value from `https://analytics.ytica.com/dashboard.html#....` 
to 
`https://localhost:3000/dashboard.html#...`

- For local development only: use `https` instead of `http` for 
`“src”: “https://localhost:3000/plugin-good-data.js”` inside the `public/plugins.json` file. 
- `npm start`
- After starting npm, the localhost will open in the browser and will likely produce an error. Make sure your URL starts with `https:localhost:3000/...` (you can manually change it)
- Navigate to the new Flex View and validate that Flex Insights dashboard is loaded automatically.
 
 
### Key files in the plugin:
 
- `GoodDataPlugin.js` - adds the icon and Flex view of Supervisor Dashboard (an example)
- `LoginGoodData.js` - this component renders an invisible iframe with `appSsoUrl` upon checking if the login conditions are fulfilled
- `LoginGoodData.js` - set of API calls to generate auth token to `analytics.ytica.com` (reporting) and `app.ytica.com` (player) through `appSsoUrl`.

## Disclaimer
This software is to be considered "sample code", a Type B Deliverable, and is delivered "as-is" to the user. Twilio bears no responsibility to support the use or implementation of this software.
