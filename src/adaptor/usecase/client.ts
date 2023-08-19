import { CubeA } from "./cube-a";
import { CubeBAdapor } from "./cube-b-adaptor";

const numberOfCubes = 5;
let counter = 0;

const CubeManufactor = () =>{
    let width = Math.floor(Math.random() * 10) + 1;
    let height = Math.floor(Math.random() * 10) + 1;
    let depth = Math.floor(Math.random() * 10) + 1;

    let success = new CubeA().manufactor(width, height, depth);

    if(success){
        counter++;
    }
    else{
        // try other manufacturer
        console.log('Company A was busy, so trying company B')
        success = new CubeBAdapor().manufactor(width, height, depth);
        if(success){
            counter++;
        }
        else{
            console.log('Company B was busy, so trying company A')
        }
    }
};

// wait some time between manufacturing each cube
const interval = setInterval(()=>{
    CubeManufactor();
    if(counter >= numberOfCubes){
        console.log(`${numberOfCubes} cubes have been manufactured`)
        clearInterval(interval);
    }
},1000);