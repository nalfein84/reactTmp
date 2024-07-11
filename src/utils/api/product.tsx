import { genericCRUD } from "./generic";

const table = '/products';

export interface Product {
    id:number, 
    name: string, 
    desc:string, 
    imgUrl: string
}

function isProduct(value : unknown): value is Product {
    if (!value || typeof value !== 'object') {
        return false
    }
    const object = value as Record<string, unknown>
    return (
        typeof object.id === 'string' &&
        typeof object.name === 'string' &&
        typeof object.desc === 'string' &&
        typeof object.imgUrl === 'string' 
    )
}

function isProductArray(value: unknown): value is Product[] {
    return Array.isArray(value) && value.every(isProduct)
}

async function getAll() : Promise<Product[]> {
    const result = await genericCRUD.genericGetter(genericCRUD.urlBase+table);

    if(!isProductArray(result)){
        throw new Error('Invalid data: result json is not an Product[]')
    }

    return result;
}

async function get (id: string) : Promise<Product> {
    const result = await genericCRUD.genericGetter(genericCRUD.urlBase+table+'/'+id);

    if(!isProduct(result)){
        throw new Error('Invalid data: result json is not an Product')
    }

    return result;
}

async function create (data: string) : Promise<Product> {
    const result = await genericCRUD.genericCreate(genericCRUD.urlBase+table, data);

    if(!isProduct(result)){
        throw new Error('Invalid data: result json is not an Product')
    }

    return result;
}

async function update (id : string, data: string) : Promise<Product> {
    const result = await genericCRUD.genericUpdate(genericCRUD.urlBase+table+id, data);

    if(!isProduct(result)){
        throw new Error('Invalid data: result json is not an Product')
    }

    return result;
}

async function remove (id: string)  : Promise<Product> {
    const result = await genericCRUD.genericDelete(genericCRUD.urlBase+table+id);

    if(!isProduct(result)){
        throw new Error('Invalid data: result json is not an Product')
    }

    return result; 
}

async function findByKey (keyType: string, keyValue:string) : Promise<Product[]> {
    const result = await genericCRUD.genericGetter(genericCRUD.urlBase+table+'?'+keyType+"="+keyValue);

    if(!isProductArray(result)){
        throw new Error('Invalid data: result json is not an Product[]')
    }

    return result;
}

export const product = {
    getAll,
    get,
    create,
    update,
    remove,
    findByKey
}; 