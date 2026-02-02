import {test,expect} from '@playwright/test';

test('Validate getAPI', async({request}) =>{

    const url="https://restful-booker.herokuapp.com/booking/";
    const baseurl="https://petstore.swagger.io/v2/store";
    
    const body=await request.get(url);

    //const response=await request.get(baseurl+'/inventory');

        const response=await request.get(`v2/store/inventory`);


   console.log(await body.json());

   console.log(await response.json());


})