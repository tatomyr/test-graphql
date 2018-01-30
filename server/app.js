import express from 'express';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import schema from './graphql';
import mongo from './mongo'; // FIXME

const app = express();

// Static server
app.use(express.static('public'));

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// GraphQL route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true,
})));

// REST routes
app.get('/test', (req, res) => {
  res.send('ok')
});

app.get('/posts', (req, res) => {
  mongo(db => {
    db.collection('posts').find().toArray((err, posts) => {
      if (err) throw err;
      res.json({ data: { posts } });
    });
  });
});

app.post('/post', (req, res) => {
  mongo(db => {
    db.collection("posts").insert({
      date: Date.now(),
      text: req.body.text,
      method: req.body.method,
    }, (err, result) => {
      if (err) throw err;
      db.collection('posts').find().toArray((err, posts) => {
        res.json({
          data: {
            received: req.body,
            status: 'ok',
            result,
            posts,
          }
        });
      });
    });
  });
});

// Starting server
const server = app.listen(process.env.PORT || 8080, () => {
  console.log('Listening at port', server.address().port);
});
