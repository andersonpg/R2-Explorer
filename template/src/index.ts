import { R2Explorer } from "r2-explorer";

// Read all available configurations here: https://r2explorer.com/getting-started/configuration/
export default R2Explorer({ readonly: false, basicAuth: [{
    username: 'patrick',
    password: 'Route66Recharged1$'
  },{
    username: 'ea',
    password: 'Route66Recharged'
  },{
    username: 'liv',
    password: 'Route66Recharged1$'
  }]
});
