"use strict"

exports.thuong1 = async (event, context) => {
    console.log("thuong1 invoked");
    console.log(event)
    const response = {
        statusCode: 200,
        body: JSON.stringify({name: "Thuong", description: "Hello from Thuong function"})
    }
    return response;
}