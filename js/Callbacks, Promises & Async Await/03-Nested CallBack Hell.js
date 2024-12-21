/* 
Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)

This style of programming becomes difficult to understand & manage.*/ 

function getdata (dataId , callback) {
    setTimeout(() => {
        console.log(dataId)
        if(callback){
            callback()
        }
    }, 2000);
}

getdata(1 , ()=> {
    getdata(2 , ()=>{
        getdata(3 , function (){
            getdata(4)
        });
    });
});