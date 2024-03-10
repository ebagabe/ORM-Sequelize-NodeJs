const database = require('../models');

class PessoaController {
    static async pegaTodos(req, res) {
        try {
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).json(listaDePessoas);
        } catch (error) {
            // Erro
        }
    }
}

module.exports = PessoaController;