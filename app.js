const express = require('express');
const getRepo = require('./my_modules/gitrepo');
const app = express();
const port = 3000;
//import { Octokit } from "gitrepo";
//import {getRepo} from "gitrepo";


app.get('/', (req, res) => {
  res.send('Hello World!');
}
);
app.get('/data', async (req, res) => {
  const response = await getRepo('Jay-Go-On', 'tech-stacts');
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log()
}
);

async function main() {

  import("@octokit/core");
  const response = await getRepo('Jay-Go-On', 'tech-stacts');
  console.log(response);
  console.log(getRepo('Jay-Go-On', 'tech-stacts'));
  console.log('main');



}

main();
