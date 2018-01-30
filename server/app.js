import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import mongo from './mongo';

import schema from './graphql';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true,
})));



app.get('/test', (req, res) => {
  res.send('ok')
});

app.get('/posts', (req, res) => {
  mongo(db => {
    db.collection('posts').find().toArray((err, posts) => {
      if (err) throw err;

      res.json({ posts });
    });
  });
});

app.post('/post', (req, res) => {
  mongo(db => {
    db.collection("posts").insert({ date: Date.now(), text: req.body.text }, (err, result) => {
      if (err) throw err;

      db.collection('posts').find().toArray((err, posts) => {
        res.json({ received: req.body, status: 'ok', result, posts });
      });
    });
  });
});

const server = app.listen(process.env.PORT || 8080, () => {
  console.log('Listening at port', server.address().port);
});
