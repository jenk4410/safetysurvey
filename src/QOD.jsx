// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "What is the safest way to directly view the solar eclipse?",
                choices: [
                    "Solar Eclipse Glasses", "Sun Glasses", "Without any protection", "Swimming Goggles"
                ],
                correctAnswer: "Solar Eclipse Glasses"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "What should you do if you experience discomfort while watching the solar eclipse?",
                choices: [
                    "Keep Watching", "Stop viewing immediately and rest your eyes", "Close one of your eyes", "Adjust your positioning"
                ],
                correctAnswer: "Stop viewing immediately and rest your eyes"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "Why is it dangerous to look directly at the sun during the eclipse?",
                choices: [
                    "It is too bright", "It can cause permanent eye damage", "It is bad luck", "It will give you a sunburn"
                ],
                correctAnswer: "It can cause permanent eye damage"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "What should you do if you are outside during an eclipse without proper eye protection?",
                choices: [
                    "Squint your Eyes", "Avoid looking at the sun and find a nearby building to shelter in", "Continue as normal", "Look at the sun"
                ],
                correctAnswer: "Avoid looking at the sun and find a nearby building to shelter in"
            },
             {
                type: "radiogroup",
                name: "question5",
                title: "When is it safe to remove your solar viewing glasses during an eclipse?",
                choices: [
                    "During the partial phases", "Anytime", "Never", "During Totality"
                ],
                correctAnswer: "During Totality"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "What should you do if you are driving during a solar eclipse?",
                choices: [
                    "Stop your car and view the eclipse from the roadside", "Pull over to a safe location and view the eclipse with proper eye protection", "Continue driving while wearing solar eclipse glasses", "Speed up to reach your destination before the eclipse ends"
                ],
                correctAnswer: "Pull over to a safe location and view the eclipse with proper eye protection"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "What should you do if you experience vision problems after viewing a solar eclipse?",
                choices: [
                    " Wait a few days for your eyes to recover on their own", "Visit an eye doctor or healthcare professional for an evaluation", "Ignore it, as it's probably temporary", "Continue viewing future eclipses without protection"
                ],
                correctAnswer: "Visit an eye doctor or healthcare professional for an evaluation"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "How often should solar eclipse glasses be inspected for damage or wear?",
                choices: [
                    "Daily", "Monthly", "Yearly", "Before each use"
                ],
                correctAnswer: "Before each use"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "Which of the following is a symptom of solar retinopathy, a condition caused by staring at the sun?",
                choices: [
                    "Blurry Vision", "Red eyes", "Improved vision clarity", "Night Vision"
                ],
                correctAnswer: "Blurry Vision"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "What should you do if you notice any defects or scratches on your solar eclipse glasses?",
                choices: [
                    " Continue using them", "Try to repair them", "Watch the eclipse without glasses", "Dispose of them properly and obtain a new pair"
                ],
                correctAnswer: "Dispose of them properly and obtain a new pair"
            }];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Solar Eclipse Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Solar Eclipse Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}