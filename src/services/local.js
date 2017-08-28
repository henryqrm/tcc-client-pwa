export default class LocalService {
  constructor(resource) {
    this.resource = resource;
  }
  index() {
    return this.resource('local/')
      .query()
      .then(res => res.json());
  }
  updateTable(table) {
    return this.resource('local/table/{id}')
      .update(table)
      .then(res => res.json());
  }
}
