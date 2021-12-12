function define(name, value) {
  Object.defineProperty(exports, name, {
    value,
    enumerable: true
  });
}
let baseURL = 'api.foodics.com';
if (process.env.FOODICS_ENV == 'sandbox') {
  baseURL = 'api-sandbox.foodics.com';
}
define("BASE_URL", `https://${baseURL}/v5`);