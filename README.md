## Delivery NodeJS

This beckend application is composed of NodeJS, Prisma.io and Postgres.

This is a API with the purpose to function as an food application beckend.

*OBS: All the methods that refers to `PUT` and `POST` are in `JSON` Format.*

<br><br>

# HOW TO RUN 
**Postgres needs to be running, there is a `.env.exmaple` on how the `.env` file should be.**
 1. `git clone https://github.com/Niltonsf/delivery-nodejs.git`
 2. `yarn` or `npm i`
 3. `yarn dev`

<br><br>

# HOW TO USE

##### Enviroment
- {{base_url}} = http://localhost:3000

## Routes Client
#### (POST) Create Client - {{base_url}}/create/client
```
{
  "username": "<Client Username>",
  "password": "<Client Password>"
}
```
#### (POST) Authenticate Client - {{base_url}}/authenticate/client
```
{
  "username": "<Client Username>",
  "password": "<Client Password>"
}
```
#### (GET) Get Deliveries from Client - {{base_url}}/get/deliveries/client
```
NEED AUTHENTICATION AND BEARER TOKEN ONLY
```

## Routes Delivery Man
#### (POST) Create Delivery Man - {{base_url}}/create/deliveryman
```
{
  "username": "<DeliveryMan Username>",
  "password": "<DeliveryMan Password>"
}
```
#### (POST) Authenticate Delivery Man - {{base_url}}/authenticate/deliveryman
```
{
  "username": "<DeliveryMan Username>",
  "password": "<DeliveryMan Password>"
}
```
#### (GET) Get Deliveries from Delivery Man - {{base_url}}/get/deliveries/deliveryman
```
NEED AUTHENTICATION AND BEARER TOKEN ONLY
```

## Routes Deliveries
#### (POST) Create Delivery - {{base_url}}/create/delivery
```
{
  "item_name": "<Item Name>",
}
```
#### (GET) Delivery - {{base_url}}/get/deliveries/available
```
NEED AUTHENTICATION AND BEARER TOKEN ONLY
```
#### (PUT) Updates Delivery with Delivery Man - {{base_url}}/update/deliveries/:id
```
THE ID'S PARAMS PASSED IN THE ULR ARE DELIVERY MAN ID. 
URL PARAM EXAMPLE: {{base_url}}/update/deliveries/43a852f5-b790-43fe-8e6c-ab4c18fd5f7c
```
#### (PUT) Updates Delivery EndDate - {{base_url}}/update/delivery/enddate/:id
```
THE ID'S PARAMS PASSED IN THE ULR ARE DELIVERY MAN ID. 
URL PARAM EXAMPLE: {{base_url}}/update/delivery/enddate/43a852f5-b790-43fe-8e6c-ab4c18fd5f7c
```
