# Hello, This is an Event Management Api

### How to run

Clone the repo. In the project directory open terminal and run **npm install**

after installation complete run, ***npm start***  OR  ***npm run dev***

## API Endpoints

> - http://localhost:3000/events?page=1&limit=3
>
> Returns all the events that hasn't been started yet. **query parameters** are **page** and **limit** changing these values returns a paginated event results.



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
