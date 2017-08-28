export default class LocalService {
  constructor(resource) {
    this.resource = resource('local/{_id}');
    // this.resourceTable = resource('local/table');
  }
  index() {
    return this.resource
      .query()
      .then(res => res.json());
  }
  getTable(table) {
    /* eslint-disable */
    return this.resource
      .query({
        _id: table._id,
      })
      .then(res => res.json());
  }
}
