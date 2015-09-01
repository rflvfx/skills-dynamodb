const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, GetCommand, QueryCommand } = require("@aws-sdk/lib-dynamodb");

const doc = DynamoDBDocumentClient.from(new DynamoDBClient({}));

await doc.send(new PutCommand({
  TableName: "Users",
  Item: { pk: "USER#1", sk: "PROFILE", name: "Ana" },
}));

await doc.send(new QueryCommand({
  TableName: "Users",
  KeyConditionExpression: "pk = :pk",
  ExpressionAttributeValues: { ":pk": "USER#1" },
}));
- Tweak implementation — iteration 2 (2015)
- Improve error handling — iteration 5 (2015)
- Add validation — iteration 9 (2015)
