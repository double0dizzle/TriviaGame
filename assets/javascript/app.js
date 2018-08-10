var score = 0;
    
    

    function submitAnswer() {
        var questionOne = document.quiz.question1.value;   
        var questionTwo = document.quiz.question2.value;
        var questionThree = document.quiz.question3.value;
        var questionFour = document.quiz.question4.value;
        var questionFive = document.quiz.question5.value;     
        
        //$("#score").html(score);
        document.getElementById("score").innerHTML = score;
        
        if (questionOne == "Galaxy") {
            score++;
            console.log("ttt")
            $("#q1").append("<p class='great-job'>" + "Make it so!" + "<p>");
        }
        else {
            $("#q1").append("<p class='great-job'>" + "Reverse course, Ensign!" + "<p>");
        }
        if (questionTwo == "USS Voyager") {
            score++;
            console.log("fff")
            $("#q2").append("<p class='great-job'>" + "Make it so!" + "<p>");
        }
        else {
            $("#q2").append("<p class='great-job'>" + "Reverse course, Ensign!" + "<p>");
        }
        if (questionThree == "The Caretaker") {
            score++;
            console.log("hhh")
            $("#q3").append("<p class='great-job'>" + "Make it so!" + "<p>");
        }
        else {
            $("#q3").append("<p class='great-job'>" + "Reverse course, Ensign!" + "<p>");
        }
        if (questionFour == "Tuvix") {
            score++;
            console.log("jjj")
            $("#q4").append("<p class='great-job'>" + "Make it so!" + "<p>");
        }
        else {
            $("#q4").append("<p class='great-job'>" + "Reverse course, Ensign!" + "<p>");
        }
        if (questionFive == "All Good Things...") {
            score++;
            console.log("lll")
            $("#q5").append("<p class='great-job'>" + "Make it so!" + "<p>");
        }
        else {
            $("#q5").append("<p class='great-job'>" + "Reverse course, Ensign!" + "<p>");
        }
        document.getElementById("score").innerHTML = score;
            }
        
       

        $(document).ready(function() {

         var intervalId;
         var number = 30;

         function run() {
             clearInterval(intervalId);
             intervalId = setInterval( decrement, 1000)
         }

         function decrement() {
             number--;
             $("#countdown").html("<p>" + number + "</p>")
                 if(number === 0) {
                     stop();
                     alert("Time's up!");
                 }
            }

            function stop() {
                clearInterval(intervalId);
            }


            run();

            



    });