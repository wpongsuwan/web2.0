const express = require('express');
const app = express();
app.get('/', (req, res) => {
 res.send('Hello Web 2.0');
})

app.listen(3000, () => {
   console.log('server is running on port 3000');

});
