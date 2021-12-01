import * as http from 'http';
import * as express from 'express';

const app = express();

app.get('/demo', (req: any, res: any) => {
  console.log('expess handler', req.url);
  res.send('demo');
});
app.use((err: any, req: any, res: any, next: any) => {
  if (!res.headersSent) {
    res.status(404).send('Error 404');
  }
});

const main = () => {
  const server = http.createServer((req, res) => {
    console.log('plain handler', req.url);
  });
  server.on('request', app);
  server.listen(4000);
};
if (typeof require != 'undefined' && require.main == module) {
  main();
}

export default { app };
