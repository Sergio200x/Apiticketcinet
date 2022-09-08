import express from "express";
import config from './config.js'
const app =express();
import tickets_routes from './routes/tickets_routes.js'
//setings
app.set('port', config.port )


app.use(tickets_routes)


export default app;