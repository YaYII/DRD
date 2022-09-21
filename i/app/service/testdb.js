'use strict';

const Service = require('egg').Service;

class testdbService extends Service {


  // eslint-disable-next-line no-empty-function
  async find(uid) {
    const app = this.app;
    try {
      // eslint-disable-next-line quote-props, space-in-parens
      const res = await app.mysql.get('user', { 'id': uid } );
      return res;

    } catch (error) {
      console.log(error);
      return null;
    }
  }

}
module.exports = testdbService;
