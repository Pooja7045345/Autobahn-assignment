
const productionApiUrl = "https://jsonplaceholder.typicode.com/";


let PatchRequest = async (endPoint, requestBody) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            
        },
        body: JSON.stringify(requestBody),
    });
    let response = await result.json();
    return response;
};
let PutRequest = async (endPoint, requestBody) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
    });
    let response = await result.json();
    return response;
};

let PostRequest = async (endPoint, requestBody) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Accept: "application/json",
            
        },
        body: JSON.stringify(requestBody),
    });
    let response = await result.json();
    return response;
};

let GetRequest = async (endPoint) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            
        },
    });

    let response = await result.json();
    return response;
};



let DeleteRequest = async (endPoint) => {
    let result = await fetch(productionApiUrl + endPoint, {
        method: "DELETE",
        headers: {
            "Access-Control-Allow-Origin": "*",  
        },
    });
    let response = await result.json();
    return {response , status : result.status === 200 ? 'success' : 'error'};
};

export { GetRequest, PatchRequest, PutRequest , DeleteRequest , PostRequest} 