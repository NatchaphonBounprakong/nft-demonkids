const path = require('path')
const express = require('express')
const app = express()

//= ================= [START Init Client Controller] =================//
app.use('/', express.static(path.join(__dirname + '/dist/nft-demon-kid')));
//= ================= [END Init Client Controller] =================//

//= ================= [START Init Response UI] =================//
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/nft-demon-kid/index.html'));
});
//= ================= [START Init Response UI] =================//

app.listen(8080)