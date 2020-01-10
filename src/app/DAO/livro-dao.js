class LivroDAO {

    constructor(db){
        this._db = db;
    }

    adiciona(livro){
        return new Promise( (resolve, reject) => {
            this._db.run('INSERT INTO livros (titulo, preco, descricao ) values(?, ?, ?)',
             [ livro.titulo, 
               livro.preco, 
               livro.descricao], (error) => {

                if(error)
                    return reject('Não foi possível salvar o livro');

                return resolve();    
            });
        })
    }

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.each('SELECT * FROM livros WHERE id = ?', id , (error, livro) =>{
                if(error)
                    return reject('Não foi possível buscar os livro');

                return resolve(livro);
            });
        });
    }

    atualiza(livro){
        return new Promise((resolve, reject) => {
            this._db.run('UPDATE livros SET titulo = ?, preco = ?, descricao = ? WHERE id = ?',
                    [livro.titulo, livro.preco, livro.descricao, livro.id], (error) => {

                    if(error)
                        return reject('Não foi possível atualizar o livro');

                    return resolve();                        
            });
        }
        );
    }

    deleta(id){
        return new Promise((resolve, reject) => {
            this._db.run('DELETE FROM livros WHERE id = ? ', id, (error) => {
                if(error)
                    return reject('Não foi possível deletar o livro');

                return resolve();
            });
        });
    }
    
    lista(){
        return new Promise( (resolve, reject) => {
            this._db.all('SELECT * FROM livros', (error, results) => {
                if(error)
                    return reject('Não foi possível buscar os livros');

                return resolve(results);    
            });
        })
    }
}

module.exports = LivroDAO;