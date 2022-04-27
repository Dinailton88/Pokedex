import express from "express" //importando o express
import path from 'path'         // fazendo o ejs reconhecer a pasta public ou outra coisa que não esteja na viwes(definir caminhos padõres)

const __dirname = path.resolve(path.dirname('')) // dirname serve para informa qual é o caminho padrão


const app = express()           //instanciando o express dentro da const app

app.use(express.urlencoded({extended:true})) //infromação vai para o corpo (body)
app.use(express.json()) //converter as insformações para JSON

app.set("view engine","ejs")    // faz com que o express reconheça o ejs como motor de visualização
app.use(express.static(path.join(__dirname,"public")))      //configurando express pra reconhecer a pasta public juntanto sem excluir a views

const port = 3001
app.listen(port,() => {
    console.log(`Rodando na porta ${port}`) //listen é uma função do express para criar servidor
    })
    let pokemon = [
        {
            numero:10,
            id :1,
            nome: 'CATERPIE',
            tipo: 'Bug',
            img : 'https://cdn.discordapp.com/attachments/964597817966465097/967951882821701642/caterpie.png',
            Altura: '0,3 m', 
            Peso : '2,9 kg',
            categoria : 'minhoca',
            habilidades :'Pó de Escudo',

            
            
        },
        {
            numero: 12,
            id :2,
            nome:'BUTTERFREE',
            tipo:'Bug',
            img :'https://cdn.discordapp.com/attachments/964597817966465097/967951882582634536/BUTTERFREE.png',
            Altura: '1,1 m', 
            Peso : '32,0 kg',
            categoria : 'Borboleta',
            habilidades :'Olhos Compóstos',
        },
        {
            numero: 53,
            id : 3,
            nome: 'PERSIAN',
            tipo: 'Normal',
            img : 'https://cdn.discordapp.com/attachments/964597817966465097/967951883027247224/Sem_titulo.png',
            Altura: '1,0 m', 
            Peso : '32,0 kg',
            categoria : 'Gato Elegante',
            habilidades :'Tecnico e Flexìvel',
            
        },
      
    ]

app.get('/',(req,res)=>{                // get p eum metodo HTTP ou HTTPS que serve para para trazer uma pagina
    res.render('index.ejs',{
        pokemon
    })         
})
app.get('/detalhes/:id' ,(req,res)=> {
    let poke = []    
    pokemon.filter((element)=>{
        if(element.id == req.params.id ){
            poke.push(element)
        }
      
    })    
    res.render('detalhes.ejs',{
        poke
    })
})
app.get('/cadastro.ejs',(req,res) =>{
    res.render('cadastro.ejs')
})
app.post('/cadastro',(req,res) => {
    let id = pokemon[pokemon.length -1].id+1
    const {numero,nome,tipo,img,Altura,Peso,categoria,habilidades} = req.body
    pokemon.push({id:id ,numero,nome,tipo,img,Altura,Peso,categoria,habilidades})
    res.redirect('/')
})

