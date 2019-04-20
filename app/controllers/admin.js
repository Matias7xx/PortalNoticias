module.exports.formulario_inclusao_noticia = (app, req, res) => { //Exportando propriedade
    res.render("admin/form_add_noticia", {validação : {}, noticia : {}})
}

module.exports.noticias_salvar = (app, req, res) => {
    let noticia = req.body;
        
        //Express Validator
        req.assert('titulo','Titulo é obrigatório!').notEmpty();
        req.assert('resumo','Resumo é obrigatório!').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres!').len(10, 100);
        req.assert('autor','Autor é obrigatório!').notEmpty();
        req.assert('data_noticia','Data é obrigatório!').notEmpty()//.isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Notícia é obrigatório!').notEmpty();

        //Caso o campo não atenda ao critério de validação
        let error = req.validationErrors();

        if(error){
            res.render("admin/form_add_noticia", {validação : error, noticia : noticia})
            return; //Para a execução
        }

        const connection = app.config.dbConnection();
        const noticiasModel = new app.app.models.NoticiasDAO(connection) //Instância da classe Noticias

        noticiasModel.salvarNoticia(noticia, (error, result) => {
        res.redirect('/noticias'); //Redireciona o Browser para outra pagina
        })

}