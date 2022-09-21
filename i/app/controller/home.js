'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg app';
  }

  async add() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

  // eslint-disable-next-line no-dupe-class-members
  async getUser() {
    const { ctx } = this;
    const res = await ctx.service.testdb.find(1);
    ctx.body = res;
  }

}

module.exports = HomeController;
