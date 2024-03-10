class Controller {
    constructor(entidadeService) {
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

    async pegaUmPorId(req, res) {
        const { id } = req.params;

        try {
            const umRegistro = await this.entidadeService.pegaRegistroPorId(Number(id));
            return res.status(200).json(umRegistro)
        } catch (error) {
            console.log(error);
        }
    }

    async criaNovo(req, res) {
        const dadosParaCriacao = req.body;

        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dadosParaCriacao);
            return res.status(200).json(novoRegistroCriado);
        } catch (error) {
            console.log(error);
        }
    }

    async atualiza(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;

        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, Number(id));
            if (!foiAtualizado) {
                return res.status(400).json({ mensagem: 'Registro não foi atualizado!' });
            }

            return res.status(200).json({ mensagem: 'Atualizado com sucesso!' });
        } catch (error) {
            console.log(error);
        }
    }

    async exclui(req, res) {
        const { id } = req.params;

        try {
            await this.entidadeService.excluiRegistro(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = Controller;