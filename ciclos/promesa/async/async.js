/* function fetchData(){
fetch("https://swapi.dev/api/planets/3/")
.then((Response)=> Response.json())
.then((data)=> console.log(data))
.catch((error)=> console.log(error));
} */


async function fetchData() {
    try {
        let Response = await fetch("https://swapi.dev/api/planets/3/")

let data = await Response.json();
console.log(data)
    } catch (error) {
console.log(error)
    }
}

const urls = [
"https://swapi.dev/api/people/1/",
"https://swapi.dev/api/starships/9/"

];
async function fetchNewData() {
    try{

        for await (let url of urls){
            let Response = await fetch(url);
            let data = await Response.json();
            console.log(data);
        }
    }catch(error){
        console.log(error);
    }
    
}