import {test,expect} from '@playwright/test';

test('Validate petstore GET API', async ({ request })=>{

    //const baseurl= "https://petstore.swagger.io/v2/store" ;
    //request.get(baseurl+'/inventory');

    //or since we gave baseurl in config.js simply can give endpoint like below

    const response=await request.get(`v2/store/inventory`); 
    const body=await response.json();
    console.log(await response.json());

    //retriving headers
    console.log ("headers are", response.headers());

    //retriving statis code
    console.log("response status is",response.status());

    //validations
    expect( response.status()).toBe(200);
    expect(body.SOLD).toBeCloseTo(1);

    expect(body).toHaveProperty("pending");

    //simple schema validator
    expect (body).toMatchObject({
        sold: expect.any(Number),
        string: expect.any(Number)
    });
})

var id;

test('Validate POST api', async({ request})=>{
    const posturl=(`v2/store/order`);

    const response=await request.post(`/v2/store/order`,
        {
            headers:{
                "content-Type":"application/json"
            },
            data:{
                 "id": 1,
  "petId": 22,
  "quantity": 1,
  "shipDate": "2026-01-09T23:23:26.588Z",
  "status": "placed",
  "complete": true
            } 
        }
    )

        console.log(await response.json());

        console.log("response headers are : ", response.headers());
        console.log ("post response status code is : ",response.status());


        const responsedata=await response.json();

        expect (responsedata.complete).toBe(true);
         id=responsedata.id;
        console.log("id value is: ",id)

        //simple schema validation
        expect(responsedata).toMatchObject({
            complete: expect.any(Boolean)
        });
    
})