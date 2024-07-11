
//const urlBase = 'https://my-json-server.typicode.com/nalfein84/reactTmp';

const urlBase = 'http://localhost:3000';

async function genericCreate(url : string, data : string) : Promise<unknown> {
    console.log(url);
    const request = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const result = await request.json();
    console.log(result);
    return result;
}

async function genericGetter(url : string) : Promise<unknown> {
    console.log(url);
    const request = await fetch(url);
    const result = await request.json();
    console.log(result);
    return result;
}

async function genericUpdate(url : string, data : string) : Promise<unknown> {
    console.log(url);
    const request = await fetch(url, {
        method: 'PUT',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const result = await request.json();
    console.log(result);
    return result;
}

async function genericDelete(url : string) : Promise<unknown> {
    console.log(url);
    const request = await fetch(url, {method: 'DELETE'});
    const result = await request.json();
    console.log(result);
    return result;
}

export const genericCRUD = {
    urlBase,
    genericCreate,
    genericGetter,
    genericUpdate,
    genericDelete
}