import express from 'express'
import socketio from 'socket.io'

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})

const server = app.listen(process.env.PORT || 3000,()=>{
    console.log('server is running')
})

const io = socketio(server)

io.on('connection',socket=>{
    console.log("New user connected")
})
