// This file has poor formatting to test the automatic formatting
const testFunction=function(param1,param2){
    if(param1>param2){
        console.log("param1 is greater");
    }else{
        console.log("param2 is greater or equal");
    }
    return param1+param2;
};

const testObject={
    name:"test",
    value:42,
    nested:{
        data:[1,2,3,4,5]
    }
};

module.exports={testFunction,testObject};
