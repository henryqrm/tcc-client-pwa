export default class LocalService {
  constructor(resource) {
    this.resource = resource('local/{id, props}');
  }
  index() {
    return this.resource
      .query()
      .then(res => res.json());
  }
}
