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
    const connectionString ='mongodb://ArWayne112:R0bin112@ds217898.mlab.com:17898/magiadigital'
    const db = Monk(connectionString)
    const userInfo = await  db.get("userInfo")
    return userInfo
}

server.route({
    method: 'GET',
    path:'/contactus', 
    handler: async (request, h) => {
        const userInfo = await userInformation()
        const userObjects = await userInfo.find()
        return { contactus: userObjects ? userObjects : [] }
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