export default class CommandProvider {
  constructor(resource) {
    this.resource = resource;
  }
  openCommand(table) {
    return this.resource('command/')
      .save(table)
      .then(res => res.json(), () => {
        throw new Error({ message: 'Erro ao abrir comanda.' });
      });
  }
  getCommand(id) {
    return this.resource('command/{id}')
      .query({
        id,
      })
      .then(res => res.json(), () => {
        throw new Error({ message: 'Erro ao carregar comanda.' });
      });
  }
}
