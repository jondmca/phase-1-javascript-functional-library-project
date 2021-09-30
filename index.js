function myEach(collection, callback){
     if (typeof collection === 'object'){
        let updatedCollection = Object.values(collection);
        for(let i = 0; i < updatedCollection.length; i++){
            callback(updatedCollection[i]);
        }
    }
    
    else for(let i = 0; i < collection.length; i++){
        callback(collection[i]);
    }
    
    return collection;
}

function myMap(collection, callback){
    let newArray = [...collection];
    let newObject = Object.assign(collection);
    let modifiedArray = [];
    if (typeof newObject === 'object'){
        console.log("Im an object")
    }
    else for (let i = 0; i < newArray.length; i++){
        modifiedArray.push(callback(newArray[i]))
    }
    console.log(modifiedArray)
    return modifiedArray;
}