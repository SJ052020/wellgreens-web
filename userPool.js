import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_fhmMZcz4B",
  ClientId: "1iarpkni6u3eicvc6cc52mdem",
};

export default new CognitoUserPool(poolData);
