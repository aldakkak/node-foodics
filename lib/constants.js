function define(name, value) {
  Object.defineProperty(exports, name, {
    value,
    enumerable: true
  });
}
const baseURL = process.env.FOODICS_END_POING || 'https://dash.foodics.com';
define("BASE_URL", `${baseURL}/api/v2`);