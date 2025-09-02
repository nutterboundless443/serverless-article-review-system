const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const tableName = process.env.ARTICLES_TABLE;

module.exports.submitArticle = async (event) => {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON', error: error.message }),
    };  
  }
  if (!body.id || !body.title || !body.content) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Missing required fields: id, title, and content are required.' }),
    };
  }
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