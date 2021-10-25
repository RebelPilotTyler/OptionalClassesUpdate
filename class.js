//This page is comprised of optional sample classes. They will not be included.
//By Tyler Widener
//tylerwidenerlm@gmail.com
class Rocket{
    //name states first
    constructor(
        fuelType, 
        weight,
        power
    ){ //substantiate
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch function started");
        alert("Launch sequence started");
        return true;
    }
    land(){
        console.log("land function started");
        alert("Land sequence started");
        return true;
    }
    detachThruster(thrusterID){
        console.log("detachThruster() function started");
        alert("Thruster " + thrusterID + " has been detached");
        return true;
    }
}
class Mission{
    constructor(
        objective,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spacecraft
    ){ //substantiate
        this.objective = objective;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spacecraft = spacecraft;
    }
    displayMissionParameters(){
        console.log("displayMissionParameters function started");
        alert("The spacecraft " + this.spacecraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear);
    }
}