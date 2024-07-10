
const urlBase = 'https://my-json-server.typicode.com/nalfein84/reactTmp';

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
    const request = await fetch(urlBase+'/product');
    const result = await request.json();

    if(!isProductArray(result)){
        throw new Error('Invalid data: result json is not an Product[]')
    }

    return result;
}

async function get (id: string) : Promise<Product> {
    const request = await fetch(urlBase+'/product/'+{id});
    const result = await request.json();

    if(!isProduct(result)){
        throw new Error('Invalid data: result json is not an Product')
    }

    return result;
}

async function create (data: string) : Promise<Product> {
    const request = await fetch(urlBase+'/product', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const result = await request.json();

    if(!isProduct(result)){
        throw new Error('Invalid data: result json is not an Product')
    }

    return result;
}

async function update (id : string, data: string) : Promise<Product> {
    const request = await fetch(urlBase+'/product/'+{id}, {
        method: 'PUT',
        body: JSON.stringify({data}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const result = await request.json();

    if(!isProduct(result)){
        throw new Error('Invalid data: result json is not an Product')
    }

    return result;
}

async function remove (id: string)  : Promise<Product> {
    const request = await fetch(urlBase+'/product/'+{id}, {method: 'DELETE'});
    const result = await request.json();
    return result;
    
}

async function findByKey (keyType: string, keyValue:string) : Promise<Product[]> {
    const request = await fetch(urlBase+'/product?'+keyType+"="+keyValue);
    const result = await request.json();

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