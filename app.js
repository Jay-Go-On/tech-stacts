const express = require('express');
const app = express();
const port = 3000;
//import { Octokit } from "gitrepo";
//import {getRepo} from "gitrepo";


app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log()
}
);

async function main() {
  const getRepo = require('./modules/gitrepo');
  import("@octokit/core");
  const response = await getRepo('Jay-Go-On', 'tech-stacts');
  console.log(response);
  console.log(getRepo('Jay-Go-On', 'tech-stacts'));
  console.log('main');
}

main();
