# Phone catalogue

Code challenge.

## Installation

You must install the dependencies with `npm i` and run the development server:

```bash
npm run dev
# or
yarn dev
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file at the root of the project.

```
# Mongo uri connection
MONGODB_URI

# AWS Bucket
AWS_MY_BUCKET_NAME
AWS_MY_BUCKET_REGION

# AWS User
AWS_MY_ACCESS_KEY
AWS_MY_SECRET_KEY

# Base url api
NEXT_PUBLIC_BASE_URL_API
```


## Documentation

It is configured as a monorepo project. The server is located in the server folder at the root of the project and the endpoints from `pages/api*`.

### Frontend features

- [react-query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/).
- translations (spanish and english).
- testing with [react testing library](https://testing-library.com/docs/react-testing-library/intro/).
- [pre-commit hook](https://www.npmjs.com/package/pre-commit).
- form validations with [react hook form](https://react-hook-form.com/).

### Backend features

- Storage S3.
- MongoDB.
- Validation of models with [Joi](https://joi.dev/).
- Dependency injection (DI) with [inversify](https://inversify.io/).
## Acknowledgements

 - [Upload Images to S3 from Node Back End](https://www.youtube.com/watch?v=NZElg91l_ms&ab_channel=SamMeech-Ward)