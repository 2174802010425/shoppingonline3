const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path');
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit : '10mb'}))
app.use(bodyParser.urlencoded({extended : true, limit : '10mb'}))
app.get('/hello',(req, res) => {
    res.json({message : 'hello from server!'})
})
app.use('/admin', express.static(path.resolve(__dirname, '../client-admin/build')));
app.get('admin/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-admin/build', 'index.html'))
});
// apis
app.use('/api/admin', require('./api/admin.js'));
app.use('/api/customer', require('./api/customer.js'));
app.use('/', express.static(path.resolve(__dirname, '../client-customer/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-customer/build', 'index.html'));
});
