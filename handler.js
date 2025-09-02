const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.ARTICLES_TABLE;

module.exports.submitArticle = async (event) => {
  const body = JSON.parse(event.body);
  const article = {
    id: body.id,
    title: body.title,
    content: body.content,
    createdAt: new Date().toISOString()
  };

  const params = {
    TableName: tableName,
    Item: article,
  };

  await dynamoDB.put(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(article),
  };
};

module.exports.getArticle = async (event) => {
  const { id } = event.pathParameters;

  const params = {
    TableName: tableName,
    Key: { id }
  };

  const result = await dynamoDB.get(params).promise();

  if (!result.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Article not found' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result.Item),
  };
};