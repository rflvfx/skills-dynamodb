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
- Polish code — iteration 10 (2015)
- Minor cleanup — iteration 13 (2015)
- Add helper — iteration 14 (2015)
- Fix lint warnings — iteration 15 (2015)
- Fix typo — iteration 25 (2015)
- Fix typo — iteration 27 (2015)
- Add tests — iteration 30 (2015)
- Update docs — iteration 31 (2015)
- Minor cleanup — iteration 35 (2015)
- Improve naming — iteration 37 (2015)
- Polish code — iteration 43 (2015)
- Refactor module — iteration 44 (2015)
- Extend coverage — iteration 45 (2015)
- Minor cleanup — iteration 46 (2015)
- Update docs — iteration 54 (2015)
- Add helper — iteration 57 (2015)
- Document usage — iteration 59 (2015)
- Add helper — iteration 60 (2015)
- Add helper — iteration 3 (2016)
- Minor cleanup — iteration 4 (2016)
- Add validation — iteration 6 (2016)
- Fix edge case — iteration 10 (2016)
- Fix typo — iteration 13 (2016)
- Extend coverage — iteration 15 (2016)
- Fix typo — iteration 18 (2016)
