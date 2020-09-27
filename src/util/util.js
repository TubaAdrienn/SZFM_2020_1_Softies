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
        return Math.floor(((date.getDay()+1)*dateDay)/2);
    }
}