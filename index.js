
var express = require('express');
var graphqlHTTP = require('express-graphql');

var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type User {
        name: String
        sex: String
        intro: String
    }
    type Query {
        user: User
    }
`);

var root = {
    user: {
        name: 'chapin666',
        sex: '男',
        intro: '好好学习，天天向上'
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('请在浏览器中打开地址：localhost:4000/graphql'));
