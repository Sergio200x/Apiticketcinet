import app from './app.js'

app.listen(app.get('port'))

console.log("hello world"+" "+ process.env.PORTS)

