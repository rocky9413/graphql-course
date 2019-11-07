const express = require('express');
const graphqlHTTP = require('express-graphql'); // middleware func for graphql
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect(
  'mongodb+srv://rocky:ilovetesting@rlcluster-cy0q7.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.connection.once('open', () => console.log('Connected to DB'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('listen on port 4000'));
