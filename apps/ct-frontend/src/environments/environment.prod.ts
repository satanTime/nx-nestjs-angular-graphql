export const environment = {
  production: true,
  urlApp: `<!--# echo var='URL_APP' -->`,
  urlApi: `<!--# echo var='URL_API' -->`,
  urlApiGql: `<!--# echo var='URL_API_GQL' -->`,
  ssoUrl: `<!--# echo var='SSO_URL' -->`,
  ssoRealm: `<!--# echo var='SSO_REALM' -->`,
  ssoClientId: `<!--# echo var='SSO_CLIENT_ID' -->`,
  gaMeasurementId: `<!--# echo var='GA_MEASUREMENT_ID' -->`,
  ngrxDebug: `<!--# echo var='NGRX_DEBUG' -->`.length > 0,
};
