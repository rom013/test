import fastify from 'fastify'

const app = fastify()

// Declare a route
app.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})


app.listen({ port: 3000 }, () => {
    console.log("Server runing at 3000")
})