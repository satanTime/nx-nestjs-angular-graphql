export const environment = {
  production: true,
  urlApp: `<!--# echo var='URL_APP' -->`,
  urlApi: `<!--# echo var='URL_API' -->`,
  urlApiGql: `<!--# echo var='URL_API_GQL' -->`,
  gaMeasurementId: `<!--# echo var='GA_MEASUREMENT_ID' -->`,
  ngrxDebug: `<!--# echo var='NGRX_DEBUG' -->`.length > 0,
};
