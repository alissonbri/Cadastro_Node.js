const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'registro'
});

conexao.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');
});

// Rota para o caminho raiz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/CODIGO.html'); // Envia o arquivo HTML
  });

app.post('/formulario', (req, res) => {
  const { email, senha } = req.body;
  if (req.body.cadastrar) {
    const hashedSenha = bcrypt.hashSync(senha, 10);
    const sql = 'INSERT INTO clientes (email, senha) VALUES (?, ?)';
    conexao.query(sql, [email, hashedSenha], (err, result) => {
      if (err) {
        console.error('Erro ao cadastrar usuário: ', err);
        res.send('Erro ao cadastrar usuário');
      } else {
        console.log('Usuário cadastrado com sucesso');
        res.send('Usuário cadastrado com sucesso');
      }
    });
  } else if (req.body.login) {
    const sql = 'SELECT senha FROM clientes WHERE email = ?';
    conexao.query(sql, [email], (err, result) => {
      if (err) {
        console.error('Erro ao realizar login: ', err);
        res.send('Erro ao realizar login');
      } else {
        if (result.length === 1 && bcrypt.compareSync(senha, result[0].senha)) {
          console.log('Login bem-sucedido');
          res.send('Login bem-sucedido');
        } else {
          console.log('Email não encontrado ou senha incorreta');
          res.send('Email não encontrado ou senha incorreta');
        }
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
