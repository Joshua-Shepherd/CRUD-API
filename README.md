# CRUD-API
Simple CRUD Api using ExpressJS and MongoDB.


Visit: https://stormlite.herokuapp.com/ and use the search to pull the current weather alerts, and forcasts for your City. 
The Api portion of the app exists on the following endpoints:

GET: https://stormlite.herokuapp.com/api/weatherApi - Get All forcasts

GET: https://stormlite.herokuapp.com/api/weatherApi/:forcastId - Get a Single forcast

POST: https://stormlite.herokuapp.com/api/weatherApi - Body:
```JSON
{
    "location": String,
    "degrees": Number,
    "forcast": String
}
```
UPDATE: https://stormlite.herokuapp.com/api/weatherApi/:forcastId - Body:
```JSON
{
    "location": "Austin, Texas",
    "degrees": 93.67,
    "forcast": "forcast"
} 
```
DELETE: https://stormlite.herokuapp.com/api/weatherApi/:forcastId 

This app uses a file /config/config.env along with the dotenv module to configure Environment Variables. 
You must configure the file with the following using your own values:
```env
MONGO_DB_USER=
MONGO_DB_PW=
ATLAS_URL=
WEATHER_STACK_KEY=
GEOCODE_TOKEN=
DEV_URL=http://localhost:3000/api/weatherApi/
```
For additional resources like weatherStack, and Geocode, you must present your own Authorization tokens and keys
https://weatherstack.com/documentation
https://docs.mapbox.com/api/overview/

These resources are free for the most part and available to the public


Additionally, You can refactor to use any type of Database you'd like, But to work as is.. You need to setup and configure your own MongoDB Atlas database, and place the User, Password, and Url in the config.env. 

Utilizing the .env, your URL will look something like this once completed: 
```
mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PW}@${process.env.ATLAS_URL}?retryWrites=true&w=majority
```
More on MongoDB ATLAS here: https://www.mongodb.com/cloud/atlas
