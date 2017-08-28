export default class CommandProvider {
  constructor(resource) {
    this.resource = resource;
  }
  openCommand(idTable) {
    return this.resource('command/{id}/{prop}')
      .save(idTable)
      .then(res => res.json(), () => {
        throw new Error('Erro ao salvar produto');
      });
  }
}
