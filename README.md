
# Introduction to Cloud Computing 
A cloud computing is the delivery of computing services—such as servers, storage, databases, networking, software, and analytics—over the internet (“the cloud”). It allows developers to access scalable and flexible IT resources without the need to own or manage physical infrastructure.
How backend developers benefit-
Backend developers can use cloud services to:
1.Deploy APIs and backend logic without managing servers
2.Scale applications automatically based on usage
3.Securely store and access data
4.Integrate services like authentication, databases, and file storage quickly
## Screenshots
## 1 Lamda Test Output
![Lambda Test](./Screenshots/lambda-test-JPEG.jpeg)
## 2 API Gateway Response
![API Response](./Screenshots/api-response-JPEG.jpeg)

###  How to Deploy and Test the Endpoint

###  Step 1: Create the Lambda Function
- Go to [AWS Lambda Console](https://console.aws.amazon.com/lambda)
- Click **Create function**
- Select **Author from scratch**
- Runtime: `Node.js 18.x`
- Function name: `firstFunction`
- In the code editor, paste the contents of `index.js`
- Under **Configuration > Environment variables**, add:
  - Key: `GREETING`
  - Value: `Welcome to cloud`
- Click **Deploy**

### Step 2: Connect to API Gateway
- Go to [API Gateway Console](https://console.aws.amazon.com/apigateway)
- Click **Create API** → choose **HTTP API**
- Give it a name
- Add a route:
  - Method: `GET`
  - Path: `/hello`
  - Integration target: select your Lambda function
- Deploy the API (use the `$default` stage)
- Copy your **Invoke URL** (`https://p03lz0epbd.execute-api.eu-north-1.amazonaws.com/`)

> Full endpoint URL will be:  
> `https://p03lz0epbd.execute-api.eu-north-1.amazonaws.com/hello`

###  Step 3: Test the API

####  Using Your Browser or Postman
Visit your full endpoint in a browser:
