// import json server
const jsonserver=require('json-server')
// import cors
const cors=require('cors')


// create json server
const server=jsonserver.create()

// json type data convert into js data - before request resolve
const middlware=jsonserver.defaults()

// create a router
const router=jsonserver.router('db.json')


// apply in server
server.use(middlware)
server.use(cors())
server.use(router)


const PORT=5000
server.listen(PORT,()=>{
    console.log(`___Json Server Started At Port : ${PORT}_____`);
})