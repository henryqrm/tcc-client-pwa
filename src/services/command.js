class CommandProvider {
  constructor() {
    this.resource = this.$resource('command/{id}/{prop}');
  }
  openCommand(idTable) {
    return this.resource
      .save(idTable)
      .then(res => res.json(), () => {
        throw new Error('Erro ao salvar produto');
      });
  }
}

export default new CommandProvider();
