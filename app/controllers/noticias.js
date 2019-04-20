module.exports.noticias = (app, req, res) => {
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection) //Instância da classe Noticias

    noticiasModel.getNoticias((error, result) => {
        res.render("noticias/noticias", { noticias : result })
    })
}

module.exports.noticia = (app, req, res) => {
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    const id_noticia = req.query

    noticiasModel.getNoticia(id_noticia,(error, result) => {
        res.render("noticias/noticia", { noticia : result })
    })
}