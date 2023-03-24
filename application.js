/*The purpose of this application is to test the logic behind selecting a
random QC inspector to perform 1st piece inspections from the laser department.
While each name is drawn at random, the code will check to make sure someone
hasn't gone too many more times than the rest.  If that does become the case,
their name will not be considered in that the drawing.  
Each QC personal will have a score to keep track of this.
Let's begin......   */


//Author: Sean Collins


//this class defines what a inpsector is. Their name and their score
class Inspector{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }  
    //this method adds a point to the Inspectors score 
    scoreIncrementer(){
        this.score ++;
    } 
}
//this function is used to randomise an array
function getRandomSortValue() {
    return Math.floor(Math.random() * (3 + 1) - 2);
}



//start by making an instance of Inspector for eveyone in QC that can inspect
let amanda = new Inspector('Amanda', 0);
let deanna = new Inspector('Deanna', 0);
let alicia = new Inspector('Alicia', 0);
let amelia = new Inspector('Amelia', 0);
let judy = new Inspector('Judy', 0);
//now we put everyone on a list(array) to then shuffle
let theList = [amanda,deanna,alicia,amelia,judy];


for(i = 150; i >= 1; i--){
    //shuffle the list at random
    theList.sort(getRandomSortValue);
    //logs who was selected in the console each round 
    //before checking if they've gone too much
    console.log(`${theList[0].name} has been selected.`);
    /*The person that is in the front of the list is considered selected
    once selected, we need to make sure this person hasn't done a lot more 
    inspections lately compared to everyone else. 
    To do this, we are going to tell the computer that if the inspectors score is 
    more than the average score plus 1, they should not be selected and the program
    will loop again.  It will keep looping until it lands on someone who happens 
    to have a qualifying score.*/
    let totalScore = 0;
    theList.forEach(element => totalScore += element.score);
    if(theList[0].score <= (totalScore/5) + 1){
        alert(`${theList[0].name} has been selected.`);
        theList[0].scoreIncrementer();
    }
    theList.forEach(element => console.log(`${element.name} = ${element.score}`));
}












