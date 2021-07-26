## Assignment

Welcome to the Creatory frontend assignment. We tried to keep this assignment as short as possible yet in-depth enough to be able to get a sense of your skills and abilities. Please share any feedback or questions you have to our recruiter. Thank you for taking the time to work on this and we are looking forward to your result!

The goal of this app is to create a simple login screen. After authenticating with the backend we will display a table of data (main application).

We expect you to spend no more than a few hours on this. In case you cannot finish everything within this timeframe please share your best effort.

## Requirements

1. Create a login screen, handle wrong username/password combination
2. Preserve login state
3. After successfull login (with /auth endpoint), redirect to main application
4. Display the data (from /data endpoint) in such a way that is performant and beautiful
5. Please use your favorite framework(s) and components
6. Do not eject

## Endpoints

There are two endpoints available:

#### POST /auth

This is where you login. Use the password and username "admin" and you will be authenticated.

**Parameters**


| Name | Required| Type |
| ---      |  ------  |----------|
| username   | Required   | String   |
| password | Required | String |


**Response**

```json
{
  "authenticated": true
}
```

#### GET /data

This endpoint will provide you with the neccesary data.

**Parameters**

| Name | Required | Type | Description |
| ----------- | ----------- |----------- |----------- |
| limit | Optional | Integer | Number of results to return |
| offset | Optional | Integer | Offset of these results |

**Response**

```json
[
  {
    "id":5,
    "guid":"cc5f1459-3947-4229-b260-5d4eb8f59ed6",
    "isActive":true,
    "balance":2582.69,
    "age":30,
    "eyeColor":"brown",
    "firstName":"Lillie",
    "lastName":"Grace",
    "gender":"female",
    "email":"graceandrews@kyaguru.com",
    "phone":"+1 (902) 444-3314",
    "about":"Irure sit officia eu in sint non elit consectetur aliquip excepteur irure sunt. Nulla nulla laboris ex cupidatat deserunt consectetur sit quis adipisicing est mollit ex ullamco. Est ipsum Lorem reprehenderit incididunt aute adipisicing irure deserunt mollit minim cupidatat cupidatat. Nulla excepteur officia magna elit sunt culpa.\r\n",
    "registered":"2020-02-27T11:05:34 -07:00",
    "latitude":52.418715,
    "longitude":-36.452874,
    "tags":[
      "pariatur",
      "proident",
      "sunt",
      "irure",
      "esse",
      "non",
      "minim",
      "ipsum",
      "excepteur",
      "qui",
      "exercitation",
      "quis",
      "aute"
    ]
  }
]
```

## How to run

This is a standard create-react-app. You can start it with:

**yarn**

```
yarn start
```

**npm**

```
npm start
```

Run the backend server with:

**yarn**

```
yarn server
```

**npm**

```
npm server
```

## Judgement criteria

1. How is state being handled
2. Usage of components (reusability, performance, readability)
3. Project structure and code organization
4. Overall performance and use of industry best practice
5. Aesthetics of the final product
