const Base = require('./base.js');

module.exports = class extends Base {

  async indexAction() {
    const data = await this.model('post').select();
    this.assign('data', data);
    return this.display();
  }

};
