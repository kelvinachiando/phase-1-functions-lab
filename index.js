// Code your solution in this file!
function distanceFromHqInBlocks(CustomerLocation){
    const schuberHq = 42;
    if (CustomerLocation > schuberHq){
        return (CustomerLocation- schuberHq);
    } else {
            return (schuberHq -CustomerLocation)
        }
    
}

function distanceFromHqInFeet(CustomerLocation){
    return (parseInt (distanceFromHqInBlocks(CustomerLocation), 10)* 264);
}

function distanceTravelledInFeet(CustomerLocation, destination){    
    if (CustomerLocation>destination){
        var distance = CustomerLocation- destination;
    }else { 
        var distance= destination - CustomerLocation
    }
    return (parseInt (distance,10)* 264)
}

function calculatesFarePrice(CustomerLocation, destination){
    let chargableDist = (parseInt(distanceTravelledInFeet(CustomerLocation, destination),10))
    if (chargableDist<= 400){
        return 0;
    }else if (chargableDist<=2000){
        return ((chargableDist-400)*0.02)
    }else if (chargableDist <= 2500){
        return (25)
    }else {
        return "cannot travel that far"
    }
}