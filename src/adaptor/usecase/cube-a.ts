export interface ICubeA{
    manufactor(width: number, height: number, depth: number): boolean;
} 

export class CubeA implements ICubeA{
    static last_time = Date.now();

    manufactor(width: number, height: number, depth: number): boolean {
        const now = Date.now();
        
        if(now > CubeA.last_time + 1500){
            console.log(
                `Company A built Cube with dimensions ${width}x${height}x${depth}`
            );

            CubeA.last_time = now;
            return true;
        }
        return false; //Busy
    }
}