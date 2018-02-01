'use strict'

const Hapi = require('hapi')
const Monk = require('monk')
const server = Hapi.server({ 
    host: 'localhost', 
    port: 3001
})

server.route({
    method: 'GET',
    path:'/', 
    handler: (request, h) => {
        return {message:'testing final'}
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
})

const userInformation = async () => {
    const connectionString ='mongodb://AlyRW112:123456@ds217898.mlab.com:17898/magiadigital'
    console.log("loading db")
    const db = Monk(connectionString)
    console.log ("loaded db")
    const userInfo = await  db.get("userInfo")
    console.log("loaded userInfo")
    return userInfo
}

server.route({
    method: 'GET',
    path:'/contactus', 
    handler: async (request, h) => {
        console.log("start contactus")
        const userInfo = await userInformation()
        console.log('got userInfo', userInfo)
        const up = userInfo.find()
        console.log('up', up)
        const userObjects = await up
        console.log("got userObjects")
        return { contacts: userObjects ? userObjects : [] }
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
})

server.route({
    method: 'POST',
    path: '/contactus',
    handler: async (request, h) => {
        const userInfo = await userInformation()
        userInfo.insert(request.payload)
        console.log(request.payload)
        return h.response('success')
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-control', 'x-requested-with']
        }
    }
})

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start()