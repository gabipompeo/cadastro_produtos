import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';


const host ='0.0.0.0'; 
const porta = 3000; 

const app = express();
    var listaProdutos=[];

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'segredo',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false, 
        httpOnly: true,
        maxAge: 1000 * 60 * 15} // 15 minutos
}));


app.get('/menu',veri,(req,res)=>{
    res.write(`<html lang="pt-br">
        <head>
            <meta charset="UTF-8">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Menu</title>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>
        <body>  `);
    res.write(`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">

        <div class="container-fluid">
            <a class="navbar-brand" href="#">Menu</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse"           
            id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li class="nav-item">
                    <a class="nav-link" href="/link">Link</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Cadastro
                </a>

                <ul class="dropdown-menu">
               
                <li>
                    <a class="dropdown-item" href="/produto">Produto</a></li>

                <li><hr class="dropdown-divider"></li>

    
                <li>    
                    <a class="dropdown-item" href="/listaProdutos">Listar Produtos</a>
                </li>
                </ul>

                <li class="nav-item">
                     <a class="nav-link" href="/logout">Logout</a>
                </li>
                </li>
               
            </ul>

            <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="buscar" aria-label="buscar"/>
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>
            </div>
        </div>
        </nav>
        
        `)
    res.write(` 
        </body> 
        `)

    res.end();
})

app.get("/produto",veri,(requisicao,resposta)=>{
    resposta.write(`
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Cadastro de Produtos</title>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>

        <body>
            <div class="container mt-5">
                <form method="POST" action="/produto" class="row  gy-2 gx-3 align-items-center border p-3  ">
                <legend>
                    <h3>Cadastre os Produtos</h3>
                </legend>

                <div class="row mb-3">
                    <label class="sr-only" for="codigo"
                    >Código</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="codigo" name="codigo" >
                </div> 
                
                <div class="row mb-3">
                    <label class="sr-only" for="descricao"
                    >Descrição</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="descricao" name="descricao" >
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="precoCusto"
                    >Preço de Custo</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" 
                    id="precoCusto" name="precoCusto">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="precoVenda" 
                    >Preço de Venda</label>
                    <input type="text" class="form-control mb-2 mr-sm-2"
                    id="precoVenda" name="precoVenda">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="validade" 
                    >Validade</label>
                    <input type="text" class="form-control mb-2 mr-sm-2"
                    id="validade" name="validade">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="estoque" 
                    >Estoque</label>
                    <input type ="text" class="form-control mb-2 mr-sm-2"
                    id="estoque" name="estoque">
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="fabricante" 
                    >Fabricante</label>
                    <input type ="text" class="form-control mb-2 mr-sm-2"
                    id="fabricante" name="fabricante">
                </div>

                <div class="row mb-3">
                    <button type="submit" class="btn btn-primary mb-2">Cadastrar Produto</button>
                </div>
                </form>
            </div>
        </body>
        </html>
        `);
    resposta.end()
})

app.post("/produto",veri,(requisicao,resposta)=>{

    const codigo = requisicao.body.codigo;
    const descricao = requisicao.body.descricao;
    const precoCusto = requisicao.body.precoCusto;
    const precoVenda = requisicao.body.precoVenda;
    const validade = requisicao.body.validade;
    const estoque = requisicao.body.estoque;
    const fabricante = requisicao.body.fabricante;

    if (!codigo || !descricao || !precoCusto || !precoVenda || !validade || !estoque || !fabricante) {
        let html = `
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Produtos</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>

        <body>
            <div class="container mt-5">
                <form method="POST" action="/produto" class="row  gy-2 gx-3 align-items-center border p-3  ">
                <legend>
                    <h3>Cadastre os Produtos</h3>
                </legend>

                <div class="row mb-3">
                    <label class="sr-only" for="codigo">Código</label>
                    <input type="text" class="form-control " id="codigo" name="codigo" value="${codigo|| ""}" > `;
                if (!codigo){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o coóigo do produto
                        </div>
                    `;
                }
                html += ` 
                </div> 
                

                <div class="row mb-3">
                    <label class="sr-only" for="descricao">Descrição</label>
                    <input type="text" class="form-control " id="descricao" name="descricao" value="${descricao}">`;
                if (!descricao){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe a descrição.
                        </div>
                    `;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="precoCusto"
                    >Preço de Custo</label>
                    <input type="text" class="form-control" 
                    id="precoCusto" name="precoCusto" value="${precoCusto || ""}">`;
                
                if (!precoCusto){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o Preço de Custo.
                        </div>
                    `;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="precoVenda" 
                    >Preço de Venda</label>
                    <input type= "text" class="form-control"
                    id="precoVenda" name="precoVenda" value="${precoVenda || ""}">`;
                if (!precoVenda){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o preço de Venda
                        </div>`;
                }
                html +=`

                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="validade" 
                    >Validade</label>
                    <input type= "text" class="form-control "
                    id="validade" name="validade" value="${validade || ""}">`;
                    if (!validade){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe a validade.
                        </div>`;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="estoque" 
                    >Estoque</label>
                    <input type= "text" class="form-control "
                    id="estoque" name="estoque" value="${estoque || ""}">`;
                if (!estoque){
                    html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe a quantidade de estoque.
                        </div>`;
                }
                html +=`

                </div>

                <div class="row mb-3">
                    <label class="sr-only" for="cep" 
                    >Fabricante</label>
                    <input type= "text" class="form-control "
                    id="fabricante" name="fabricante" value="${fabricante || ""}">`;
                if (!fabricante){
                html +=`
                        <div class="alert alert-danger mt-2" role="alert">
                        Por favor informe o nome do fabricante.
                        </div>`;
                }
                html +=`
                </div>

                <div class="row mb-3">
                    <button type="submit" class="btn btn-primary mb-2">Cadastrar Produto</button>
                </div>
                </form>
            </div>
        </body>
        </html>`;

        resposta.write(html);
        resposta.end();
    }
    else {

    listaProdutos.push({
        "codigo":codigo,
        "descricao":descricao,
        "precoCusto":precoCusto,
        "precoVenda":precoVenda,
        "validade":validade,
        "estoque":estoque,
        "fabricante":fabricante,
    })
    resposta.redirect("/listaProdutos");
    }
});
    app.get("/listaProdutos",veri,(requisicao,resposta)=>{
         
        resposta.write(`<html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de Produtos</title>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>

        <body>
            
            <div class="container mt-5">
                <table class="table table-stripe table-hover">
                    <thead>
                                    <th scope="col">Código</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Preço de Custo</th>
                                    <th scope="col">Preço de Venda</th>
                                    <th scope="col">Validade</th>
                                    <th scope="col">Estoque</th>
                                    <th scope="col">Fabricante</th>
                    </thead>
                    <tbody>
            `);

            for(let i = 0;i<listaProdutos.length;i++)
            {
                const produto = listaProdutos[i];
                resposta.write(`
                        <tr>
                            <td>${i+1}</td>
                            <td>${produto.codigo}</td>
                            <td>${produto.descricao}</td>
                            <td>${produto.precoCusto}</td>
                            <td>${produto.precoVenda}</td>
                            <td>${produto.validade}</td>
                            <td>${produto.estoque}</td>
                            <td>${produto.fabricante}</td>
                        </tr>
                    `)
            }

            resposta.write(`
                        </tbody>
                    </table>
                </div>
                    <a href="/produto" class="btn btn-primary mt-3">Continuar cadastrando</a>
                </body>
                </html>
                `);
        resposta.end();
    })

app.get("/login", (requisicao, resposta) => {

    const ultimo = requisicao.cookies?.ultimo || "Nunca acessou";

    resposta.write(`
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>

        <body class= "container mt-5">
        <div class= "card p-4">
            <h3>Login</h3>

        <form action="/login" method="POST">

             <div class="mb-3">
                <label class="form-label">Usuario</label>
                    <input type="text" 
                    class= "form-control" name="usuario" 
                    id="usuario" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Digite email ou login do usuario</div>
             </div>

             <div class="mb-3">
                    <label class="form-label">Senha</label>
                    <input type="password" class="form-control" 
                    name="senha"
                    id="senha"
                    aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Digite a senha</div>
             </div>

             <button type="submit" class="btn btn-primary">Entrar</button>
             `)
    resposta.write(`
             <p class= "mt-5 mb-3 text-body-secondary">Ultimo Acesso: ${ultimo}</p>
        `);     
    resposta.write(` 
             </form>
             </div>
             </body>
             </html>
        `);
    resposta.end();
});

app.post("/login", (requisicao, resposta) => 
{
    const usuario = requisicao.body.usuario;
    const senha = requisicao.body.senha;

       if (usuario == "admin@teste.com.br" &&  senha == "123"){
        requisicao.session.logado = true; // cria a informação de q ele esta logado

        const dataultimo = new Date();
        resposta.cookie("ultimo", dataultimo.toLocaleDateString(),{maxAge: 1000* 60* 60* 24* 30, httpOnly: true});

        resposta.redirect("/menu")}

       else 
        {
        resposta.write(`
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>

        <body class= "container mt-5">
        <div class= "card p-4">
            <h3>Login</h3>

        <form action="/login" method="POST">

             <div class="mb-3">
                <label class="form-label">Usuario</label>
                    <input type="text" 
                    class= "form-control" name="usuario" 
                    id="usuario" aria-describedby="emailHelp"> 
                    <div id="emailHelp" class="form-text">Digite email ou login do usuario</div>
             </div>

             <div class="mb-3">
                    <label class="form-label">Senha</label>
                    <input type="password" class="form-control" 
                    name="senha"
                    id="senha"
                    aria-describedby="emailHelp">

                    <div id="emailHelp" class="form-text">Digite a senha
                    </div>
             </div>
                <span>
                    <p class = "text-danger"> Email ou Senha invalidos!</p>
                </span>
             <button type="submit" class="btn btn-primary">Entrar</button>
             
             </form>
             </div>
             </body>
             </html>
        `);
    resposta.end();
        }
 });

 app.get("/logout",( requisicao, resposta) => {
    requisicao.session.logado = false;
    resposta.redirect("/login");
 })

function veri(requisicao, resposta, proximo){
    if (requisicao.session?.logado){
        proximo();
     }
    else{
        resposta.redirect("/login")
}
}

app.listen(porta,host,()=>{
    console.log(`Servidor rodando em http://${host}:${porta}`);
})