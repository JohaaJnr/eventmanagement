# Hello, This is an Event Management Api

### How to run

Clone the repo. In the project directory open terminal and run **npm install**

after installation complete run, ***npm start***  OR  ***npm run dev***

## API Endpoints

> - http://localhost:3000/events?page=1&limit=3
>
> Returns all the events that hasn't been started yet. **query parameters** are **page** and **limit** changing these values returns a paginated event results.

> **Response** : {
  "events": [
    {
      "id": 2,
      "title": "Demo Event 2",
      "start_at": "2022-11-20T21:32:27.000Z",
      "end_at": "2022-11-24T01:32:27.000Z"
    },
    {
      "id": 3,
      "title": "Demo Event 3",
      "start_at": "2022-11-22T01:34:20.000Z",
      "end_at": "2022-11-24T23:34:20.000Z"
    }
  ],
  "pagination": {
    "Total": 2,
    "page": "1",
    "Per_page": "2"
  }
}



> - http://localhost:3000/events/details/:id
>
> Requires **ID Parameter** change **:id** values to **1/2/3...** to get the single event details



> - http://localhost:3000/workshops/:id
>
> Requires **ID Parameter** change **:id** values to **1/2/3...** to get all the active workshops of a single event



> - http://localhost:3000/workshops/details/:id
>
> Requires **ID Parameter** change **:id** values to **1/2/3...** to get the single workshops details



> - http://localhost:3000/reservation
>
> Make a **POST Request** with the body **name** , **email** , **workshop_id** to make a quick reservation to the workshop
