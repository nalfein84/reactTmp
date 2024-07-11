
//const urlBase = 'https://my-json-server.typicode.com/nalfein84/reactTmp';

const urlBase = 'http://localhost:3000';

export interface Auth {
    id: string,
    mail: string,
    password: string
}

function isAuth(value : unknown): value is Auth {
    if (!value || typeof value !== 'object') {
        return false
    }
    const object = value as Record<string, unknown>
    return (
        typeof object.id === 'string' &&
        typeof object.mail === 'string' &&
        typeof object.password === 'string'
    )
}

function isAuthArray(value: unknown): value is Auth[] {
    return Array.isArray(value) && value.every(isAuth)
}

async function getAll() : Promise<Auth[]> {
    const request = await fetch(urlBase+'/auth');
    const result = await request.json();

    if(!isAuthArray(result)){
        throw new Error('Invalid data: result json is not an Auth[]')
    }

    return result;
}

async function get (id: string) : Promise<Auth> {
    const request = await fetch(urlBase+'/auth/'+{id});
    const result = await request.json();

    if(!isAuth(result)){
        throw new Error('Invalid data: result json is not an Auth')
    }

    return result;
}

async function create (data: string) : Promise<Auth> {
    const request = await fetch(urlBase+'/auth', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const result = await request.json();

    if(!isAuth(result)){
        throw new Error('Invalid data: result json is not an Auth')
    }

    return result;
}

async function update (id : string, data: string) : Promise<Auth> {
    const request = await fetch(urlBase+'/auth/'+{id}, {
        method: 'PUT',
        body: JSON.stringify({data}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const result = await request.json();

    if(!isAuth(result)){
        throw new Error('Invalid data: result json is not an Auth')
    }

    return result;
}

async function remove (id: string)  : Promise<Auth> {
    const request = await fetch(urlBase+'/auth/'+{id}, {method: 'DELETE'});
    const result = await request.json();
    return result;
    
}

async function findByKey (keyType: string, keyValue:string) : Promise<Auth[]> {
    const request = await fetch(urlBase+'/auth?'+keyType+"="+keyValue);
    const result = await request.json();

    if(!isAuthArray(result)){
        throw new Error('Invalid data: result json is not an Auth[]')
    }

    return result;
}

export const auth = {
    getAll,
    get,
    create,
    update,
    remove,
    findByKey
}; 