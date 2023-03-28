const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

connection.connect((err) => {
    if(err) {
        console.error('Veritabanina baglanirken hata olustu: ', err);
        return;
    }
    console.log('Veritabanina baglanildi.');
});

app.post('/kayit', (req,res) => {

    const {email , password} = req.body;

    const query = "INSERT INTO user (username,password) VALUE (?,?)";
    
    connection.query(query, [email, password], (err,result) => {

        if(err){
            console.error("Veritabanina bilgi girereken hata: ", err);
            res.status(500).send({error: "Kayit olusturulurken bir hata olustu."});
            return;
        }
        res.status(200).send({message: "Kayit basarili!"});

    })
    
});

app.post('/', (req,res) => {

    const {email, password} = req.body;

    const query = "SELECT * FROM user WHERE username=? AND password=?";

    connection.query(query, [email, password], (err, result) => {
        if(err){
            console.error("Bilgilerin kontrolunde hata olustu. ", err);
            res.status(500).send({error: 'Bilgilerin kontrolunde hata olustu.'});
            return;
        }
        if(result.length > 0){
            const user_id = result[0].id_num;

            const isLoginQuery = "UPDATE user SET isLogin = 1 WHERE id_num=?";

            connection.query(isLoginQuery, user_id, (err,result) => {
                if(err){
                    console.error("Login bilgisi guncellenirken hata olustu. ", err);
                    res.status(500).send({error: 'Login guncellenemedi.'});
                }
            });

            res.status(200).send({message: '1'});
        }else{
            res.status(200).send({message: '0'});
        }
        

    })



})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
});



