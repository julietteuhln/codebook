export async function getProductList(searchTerm){
    const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/products.json?name_like=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getProduct(id){
    const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/products.json`);
    
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();

    const product = Object.values(data).find(item => item.id === parseInt(id, 10));

    return product;
}

export async function getFeaturedList(){
    const response = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}/featured_products.json?`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}