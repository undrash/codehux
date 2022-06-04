# CodeHux

A minimal [Codehooks](https://codehooks.io/) library.

---

The purpose of this library is to emulate the coding style of popular node
frameworks like [Express](https://expressjs.com/), [Koa](https://koajs.com/), [Fastify](https://www.fastify.io/), etc.
and make it available as a utility when developing a project on Codehooks.

Example usage:

```js
// index.js (main codehooks file)
const hux = require('codehux')();

const Cron = {
  EVERY_10_SECONDS: '*/10 * * * * *',
};

const Topics = {
  MAIN: 'MAIN',
};

hux.post('/endpoint', async (req, res) => {
  const conn = await DB.open();
  await conn.enqueue(Topics.MAIN, { task: req.body });

  res.end();
});

hux.queue(Topics.MAIN, async (req, res) => {
  const item = req.body.payload.task;

  console.log('Queue item:', item);

  res.end();
});

hux.job(Cron.EVERY_10_SECONDS, async (req, res) => {
  const conn = await DB.open();

  await conn.enqueue(Topics.MAIN, { task: 'Job Hook Says Hi :-)' });
  res.end();
});

export default hux.init();
```
