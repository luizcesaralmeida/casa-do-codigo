const db = require('../../config/database')

const LivroDAO = require('../../app/DAO/livro-dao');

const livroDAO = new LivroDAO(db);

module.exports = (app) => {

app.get('/', (req, resp) =>{
    resp.marko(require('../views/books/home/home.marko'));
} );

app.get('/livros', (req, resp) =>{

    livroDAO.lista()
        .then(livros => resp.marko(require('../views/books/listing/listing.marko'), { livros } ) )
        .catch(error => resp.marko(require('../views/books/listing/listing.marko'), { error } ) );
    });

app.get('/livros/form', (req, resp) =>{
    resp.marko(require('../views/books/register/register.marko'), {livro: {}});
} );   
    
app.post('/livros', (req, resp) =>{
        livroDAO.adiciona(req.body)
            .then( resp.redirect('/livros'))
            .catch( erro => console.log(erro));
    });

app.put('/livros', (req, resp) => {
    livroDAO.atualiza(req.body)
        .then( resp.redirect('/livros'))
        .catch( erro => console.log(erro));
});  

app.delete('/livros/:id', (req, resp) => {
    const id = req.params.id;
    livroDAO.deleta(id)
        .then( () => resp.status(200).end())
        .catch( erro => console.log(erro));
});

app.get('/livros/form/:id', (req, resp) => {
    const id = req.params.id;
    livroDAO.buscaPorId(id)
        .then( (livro) => resp.marko(require('../views/books/register/register.marko'), {livro: livro}))
        .catch( erro => console.log(erro));
});

}
