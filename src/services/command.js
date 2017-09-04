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
  updateCommand(command, product) {
    return this.resource('command/{id}/product')
      .update(
      {
        id: command._id,
      },
      product,
    ).then(res => res.json(), () => {
      throw new Error({ message: 'Não foi possivel atualizar comanda.' });
    });
  }
}
