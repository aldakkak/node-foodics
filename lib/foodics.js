const _ = require("lodash");
const superagent = require("superagent");

const constants = require("./constants");
const endpoints = require("./endpoints");
const fs = require('fs');
class NodeFoodics {
  constructor(access_token = null) {
    if (!this) return new NodeFoodics(access_token);

    // Set access_token as provided.
    this.access_token = access_token;
    this._buildFunctions();
    this._buildWhoMeFunction();
  }

  setToken(access_token) {
    this.access_token = access_token;
  }

  _buildWhoMeFunction() {
    this.whoAmI = () => {
      return new Promise(async (resolve, reject) => {
        try {
          let url = `${constants.BASE_URL}/whoami`;
          const res = await superagent
            .get(url)
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${this.access_token}`)
            .set("Accept", "application/json")
          if (res && res.ok) {
            resolve(res.body);
          } else if (res && !res.ok) {
            error = res.error;
            reject({
              statusCode: error.status,
              body: error.response.body
            });
          } else {
            reject(new Error("Unknown error"));
          }
        } catch (error) {
          reject({
            statusCode: error.status,
            body: error.response.body
          });
        }
      });
    };
  }

  // This function builds all functions defined in ./endpoints.js file.
  _buildFunctions() {
    _.forEach(endpoints, (e) => {
      let name = e.name.toLowerCase().split(" ").join("_");
      this[name] = this[name] ? this[name] : {};
      _.forEach(e.methods, (method) => {
        this[name][method] = (params, payload) => {
          return this[`_${method}FunctionBuilder`](e.path, params, payload);
        };
      });
    });
  }

  _featchAllFunctionBuilder(path, params) {
    return new Promise(async (resolve, reject) => {
      try {

        let filter = (params && params.filter) ? params.filter : null;
        let include = (params && params.include) ? params.include : null;
        let lastPage = null;
        let data = [];
        let page = 1;
        do {
          let url = `${constants.BASE_URL}/${path}`;
          url += `?per_page=${100}&page=${page}&`
          if (filter && _.size(filter) > 0) {
            var filterToArray = Object.entries(filter);
            filterToArray.forEach(([key, value]) => {
              url += `filter[${key}]=${value}&`
            });
          }

          if (include) {
            url += 'include=';
            include.forEach((data) => {
              url += `${data},`
            })
          }
          const res = await superagent
            .get(url)
            .set("Authorization", `Bearer ${this.access_token}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");
          if (res && res.ok) {
            data = data.concat(res.body.data);
            lastPage = res.body.meta.last_page;
          } else if (res && !res.ok) {
            error = res.error;
            reject({
              statusCode: error.status,
              body: error.response.body
            });
          } else {
            reject(new Error("Unknown error"));
          }
          page++;
        } while (page <= lastPage);
        resolve(data);
      } catch (error) {
        reject({
          statusCode: error.status,
          body: error.response.body
        });
      }
    });
  }

  _listFunctionBuilder(path, params) {
    return new Promise(async (resolve, reject) => {
      try {

        let filter = (params && params.filter) ? params.filter : null;
        let include = (params && params.include) ? params.include : null;
        let limit = (params && params.pagination && params.pagination.limit) ? params.pagination.limit : 500;
        let page = (params && params.pagination && params.pagination.page) ? params.pagination.page : 1;
        let url = `${constants.BASE_URL}/${path}`;
        url += `?per_page=${limit}&page=${page}&`
        if (filter && _.size(filter) > 0) {
          var filterToArray = Object.entries(filter);
          filterToArray.forEach(([key, value]) => {
            url += `filter[${key}]=${value}&`
          });
        }

        if (include) {
          url += 'include=';
          include.forEach((data) => {
            url += `${data},`
          })
        }
        const res = await superagent
          .get(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          error = res.error;
          reject({
            statusCode: error.status,
            body: error.response.body
          });
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject({
          statusCode: error.status,
          body: error.response.body
        });
      }
    });
  }

  _getFunctionBuilder(path, id = null, params) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (id) {
          url += `/${id}`;
        }
        let filter = (params && params.filter) ? params.filter : null;
        let include = (params && params.include) ? params.include : null;
        let limit = (params && params.pagination && params.pagination.limit) ? params.pagination.limit : 500;
        let page = (params && params.pagination && params.pagination.page) ? params.pagination.page : 1;
        url += `?per_page=${limit}&page=${page}&`
        if (filter && _.size(filter) > 0) {
          var filterToArray = Object.entries(filter);
          filterToArray.forEach(([key, value]) => {
            url += `filter[${key}]=${value}&`
          });
        }

        if (include) {
          url += 'include=';
          include.forEach((data) => {
            url += `${data},`
          })
        }
        const res = await superagent
          .get(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          error = res.error;
          reject({
            statusCode: error.status,
            body: error.response.body
          });
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject({
          statusCode: error.status,
          body: error.response.body
        });
      }
    });
  }

  _createFunctionBuilder(path, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (!payload) reject(new Error("'Request Body' must be provided!"));
        const res = await superagent
          .post(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Accept", "application/json")
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          error = res.error;
          reject({
            statusCode: error.status,
            body: error.response.body
          });
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject({
          statusCode: error.status,
          body: error.response.body
        });
      }
    });
  }

  _updateFunctionBuilder(path, hid, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (!hid || hid.trim() === "")
          reject(new Error("'hid' must be provided!"));
        url += `/${hid}`;
        if (!payload) reject(new Error("'Request Body' must be provided!"));
        const res = await superagent
          .put(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Accept", "application/json")
          .set("Content-Type", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          error = res.error;
          reject({
            statusCode: error.status,
            body: error.response.body
          });
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject({
          statusCode: error.status,
          body: error.response.body
        });
      }
    });
  }

  _deleteFunctionBuilder(path, hid) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (!hid || hid.trim() === "")
          reject(new Error("'hid' must be provided!"));
        url += `/${hid}`;
        const res = await superagent
          .delete(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json")
          .set("Accept", "application/json");
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          error = res.error;
          reject({
            statusCode: error.status,
            body: error.response.body
          });
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        error = error;
        reject({
          statusCode: error.status,
          body: error.response.body
        });
      }
    });
  }

  _cancelFunctionBuilder(path, hid) {
    return new Promise(async (resolve, reject) => {
      try {
        let url = `${constants.BASE_URL}/${path}`;
        if (!hid || hid.trim() === "")
          reject(new Error("'hid' must be provided!"));
        url += `/${hid}/cancel`;
        const res = await superagent
          .post(url)
          .set("Authorization", `Bearer ${this.access_token}`)
          .set("Content-Type", "application/json")
          .set("Accept", "application/json")
          .send(payload);
        if (res && res.ok) {
          resolve(res.body);
        } else if (res && !res.ok) {
          error = res.error;
          reject({
            statusCode: error.status,
            body: error.response.body
          });
        } else {
          reject(new Error("Unknown error"));
        }
      } catch (error) {
        reject({
          statusCode: error.status,
          body: error.response.body
        });
      }
    });
  }

  // This function clears all built functions except authentication function.
  _clearAllFunctions() {
    _.forEach(endpoints, (e) => (this[e.name.toLowerCase()] = null));
  }
}

module.exports = NodeFoodics;
