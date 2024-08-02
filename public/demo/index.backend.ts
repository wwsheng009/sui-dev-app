const Constants = {
    "k1":"v1",
    "k2":"v2"
}
const Helpers = {
    "h1":function(){

    },
    "h2":function(){

    }
}
// excute by script
function GetMyDogs(){
    return ["dog1","dog2"]
}



this.__sui_page = '/index';
this.__sui_constants = {};
this.__sui_helpers = [];

if (typeof Helpers === 'object') {
	this.__sui_helpers = Object.keys(Helpers);
}

if (typeof Constants === 'object') {
	this.__sui_constants = Constants;
}
