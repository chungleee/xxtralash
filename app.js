const express = require('express')
const app = express()
const path = require('path')

// views settings
app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'ejs')

// routes
app.get('/', (req, res) => {
	res.render('pages/index')	
})

// init server
const port = 3030 || process.env.PORT
app.listen(port, () => {
	console.log(`server running on localhost:${port}`)
})