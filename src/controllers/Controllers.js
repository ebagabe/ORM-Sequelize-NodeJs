class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService;
    }

    async PegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Controller;