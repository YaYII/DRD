/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1663736377469_4040';


  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    // 允许访问接口的白名单
    domainWhiteList: [ '*' ], // ['http://localhost:8080']
  };
  config.mysql = {
    app: true, // 是否挂载到app下面
    agent: false, // 是否挂载到代理下面
    client: {
      host: '127.0.0.1', // 数据库地址
      port: '3306', // 端口
      user: 'root', // 用户名
      password: '123456', // 密码
      database: 'drd', // 连接的数据库名称
      timezone: '08:00',
    },
  };


  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
