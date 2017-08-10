export default class CONSTANT {
  static install(Vue) {
    const instanceVue = Vue;
    instanceVue.prototype.$CONSTANT = {};
    instanceVue.prototype.$CONSTANT.API = this.API; // eslint-disable-line no-param-reassign
  }

  static get API() {
    return 'localhost';
  }
}
