function define(name, value) {
  Object.defineProperty(exports, name, {
    value,
    enumerable: true
  });
}
let baseURL = 'api.foodics.com';
if (['demo','development','api-test','staging',undefined].includes(process.env.NODE_ENV)) {
  baseURL = 'api-sandbox.foodics.com';
}
define("BASE_URL", `https://${baseURL}/v5`);