import { genericCRUD } from "./generic";

const table = '/auth';

export interface Auth {
    id: string,
    login: string,
    password: string
}

function isAuth(value : unknown): value is Auth {
    if (!value || typeof value !== 'object') {
        return false
    }
    console.log("isAuth : "+value);
    const object = value as Record<string, unknown>
    const result = (
        typeof object.id === 'string' &&
        typeof object.login === 'string' &&
        typeof object.password === 'string'
    )
    if(result){console.log("isAuth : "+value+" - is Auth");}else{console.log("isAuth : "+value+" - is not Auth");}
    return result;
}

function isAuthArray(value: unknown): value is Auth[] {
    return Array.isArray(value) && value.every(isAuth)
} 

async function getAll() : Promise<Auth[]> {
    const result = await genericCRUD.genericGetter(genericCRUD.urlBase+table);

    if(!isAuthArray(result)){
        throw new Error('Invalid data: result json is not an Auth[]')
    }

    return result;
}

async function get (id: string) : Promise<Auth> {
    const result = await genericCRUD.genericGetter(genericCRUD.urlBase+table+'/'+id);

    if(!isAuth(result)){
        throw new Error('Invalid data: result json is not an Auth')
    }

    return result;
}

async function create (data: string) : Promise<Auth> {
    const result = await genericCRUD.genericCreate(genericCRUD.urlBase+table, data);

    if(!isAuth(result)){
        throw new Error('Invalid data: result json is not an Auth')
    }

    return result;
}

async function update (id : string, data: string) : Promise<Auth> {
    const result = await genericCRUD.genericUpdate(genericCRUD.urlBase+table+id, data);

    if(!isAuth(result)){
        throw new Error('Invalid data: result json is not an Auth')
    }

    return result;
}

async function remove (id: string)  : Promise<Auth> {
    const result = await genericCRUD.genericDelete(genericCRUD.urlBase+table+id);

    if(!isAuth(result)){
        throw new Error('Invalid data: result json is not an Auth')
    }

    return result; 
}

async function findByKey (keyType: string, keyValue:string) : Promise<Auth[]> {
    const result = await genericCRUD.genericGetter(genericCRUD.urlBase+table+'?'+keyType+"="+keyValue);

    if(!isAuthArray(result)){
        throw new Error('Invalid data: result json is not an Auth[]')
    }

    return result;
}

export const auth = {
    isAuth,
    getAll,
    get,
    create,
    update,
    remove,
    findByKey
}; 