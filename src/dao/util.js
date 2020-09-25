//Util class:
//static checkJokeParts - if joke.type==twopart put it together and return
class Util{
    static checkJokeParts(joke){
        if(joke.type=="twopart"){
            let jokeToDisplay=joke.setup;
            jokeToDisplay+=" ";
            jokeToDisplay+=joke.delivery;
            return jokeToDisplay;
        }
        else{
            return joke.joke;
        }
    }

    static memeOfTheDayGenerator(){
        var date=new Date();
        var dateDay=date.getDate();
        return ((date.getDay()+1)*dateDay)/2;
    }
}
//static memeOfTheDayGenerator - Generate a number based on the date