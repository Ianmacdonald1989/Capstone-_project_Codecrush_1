import Link from "next/link";
import Request from "../helpers/Request";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { UserScore } from "../profile/UserScore";
import Image from "next/image";
import Score from "@/public/images/score.png";

async function getQuestions() {
  const res = await fetch("http://localhost:8082/api/questions");
  return res.json();
}

async function getAnswers() {
  const res = await fetch("http://localhost:8082/api/answers");
  return res.json();
}

async function getUsers() {
  const res = await fetch("http://localhost:8082/api/users");
  return res.json();
}

export default function BeginnerQuestion() {
  const [beginnerQuestions, setBeginnerQuestions] = useState([]);
  const [beginnerAnswers, setBeginnerAnswers] = useState([]);
  const [correct, setCorrect] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [checkClicked, setCheckClicked] = useState(false);
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [buttonText, setButtonText] = useState("Check Answer");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      setScore(user[0].score);
    }
  }, [user]);

  useEffect(() => {
    async function getData() {
      const now = new Date();
      const day = now.getDay();
      const questions = await getQuestions();
      const beginnerQuestions = questions.filter((question) => {
        return question.questionLevel === 1 && question.dayID === day;
      });

      setBeginnerQuestions(beginnerQuestions);
      setExplanation(beginnerQuestions[0].explanation);

      const answers = await getAnswers();
      const beginnerAnswers = answers.filter((answer) => {
        return beginnerQuestions.some(
          (beginnerQuestion) => beginnerQuestion.id === answer.question.id
        );
      });
      setBeginnerAnswers(beginnerAnswers);
    }

    getData();
  }, []);

  const handleAnswerClick = (event, answer) => {
    setSelectedAnswer(answer);
    if (event.target.value === "false") {
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  };

  const newScore = score + 10;

  const checkAnswer = () => {
    console.log(correct);
    if (correct === true) {
      setScore(newScore);

      const updateUser = {
        streak: user[0].streak + 1,
        score: newScore,
        username: user[0].username,
        uid: user[0].uid,
        id: user[0].id,
      };

      const request = new Request();
      request
        .put(`http://localhost:8082/api/users/${user.uid}`, updateUser)
        .then(() => {
          setButtonText("Correct!");
        });
      setAnswerCorrect(true);
    } else if (correct === false) {
      const updateUser = {
        streak: 0,
        score: user[0].score,
        username: user[0].username,
        uid: user[0].uid,
        id: user[0].id,
      };

      const request = new Request();
      request
        .put(`http://localhost:8082/api/users/${user.uid}`, updateUser)
        .then(() => {
          setButtonText("Incorrect");
        });
    } else {
      setButtonText("Please select an answer");
    }
  };

  const logAttempt = () => {
    const updatedQuestions = [...beginnerQuestions];
    updatedQuestions[0].haveAnswered.push(user[0].uid);
    setBeginnerQuestions(updatedQuestions);
  };

  const updateQuestion = () => {
    const request = new Request();
    request.put(
      `http://localhost:8082/api/questions/${beginnerQuestions[0].id}`,
      beginnerQuestions[0]
    );
  };

  const handleCheckClick = () => {
    if (
      user[0].uid &&
      beginnerQuestions[0].haveAnswered.includes(user[0].uid)
    ) {
      setAlreadyAnswered(true);
    } else {
      setCheckClicked(true);
      checkAnswer();
      logAttempt();
      updateQuestion();
      setShowExplanation(true);
    }
  };

  const setColour = (answer) => {
    if (selectedAnswer === answer) {
      if (checkClicked) {
        if (correct) {
          return "text-slate-900 bg-gray-300 dark:bg-slate-700 dark:text-slate-200";
        } else {
          return "text-slate-900 bg-gray-300 dark:bg-slate-700 dark:text-slate-200";
        }
      }
    }
    return "";
  };
  

  return (
    <>
      <div className="flex place-content-between py-5 mt-5">
        <Link className="flex flex-col justify-center" href="/dashboard">
          <button className=" hover:text-gray-500">
            <b className="text-lg dark:text-slate-200 dark:hover:opacity-70">
              X
            </b>
          </button>
        </Link>

        <h2 className="flex items-center ml-10 font-semibold text-lg text-slate-900 dark:text-slate-200">
          Beginner
        </h2>

        <div className="bg-slate-200 rounded-full py-1 px-3">
          <div className="flex items-center gap-2">
            <b>
              {/* <UserScore/> */}

              {!answerCorrect && score}
              {answerCorrect && score}
            </b>
            <Image
              className="mb-1"
              src={Score}
              alt="Score"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>

      {/* CODE BOX */}
      <div className="flex justify-center min-w-full pt-5 pb-2">
        {beginnerQuestions.length > 0 &&
        beginnerQuestions[0].dayID !== undefined ? (
          <Image
            className="rounded-md shadow-lg dark:border-2 dark:border-slate-500"
            src={`/images/beginner/${beginnerQuestions[0].dayID}.png`}
            alt="Code"
            width={0}
            height={0}
            layout="responsive"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : null}
      </div>

      {beginnerQuestions.map((question) => (
        <div
          className="p-3 bg-blue-100 rounded-md shadow-sm mb-10 dark:bg-slate-300 dark:shadow-gray-800 dark:text-slate-900"
          key={question.id}
        >
          <p className="text-sm font-medium">{question.questionText}</p>
        </div>
      ))}

      {/* ANSWERS */}
      <section className="mb-5">
        <div className="flex flex-row gap-2 items-center my-4">
          <div className="avatar placeholder">
            <div className="bg-gray-600 text-slate-200 rounded-full w-4">
              <span className="text-xs">i</span>
            </div>
          </div>
          <h2 className="flex items-center text-sm dark:text-slate-200 dark:opacity-70">
            Select an answer
          </h2>
        </div>

        {beginnerAnswers.map((answer) => (
          <div key={answer.id}>
            <button
              value={answer.correct}
              onClick={(event) => handleAnswerClick(event, answer)}
              className={`mb-4 min-w-full text-left text-sm font-medium focus:bg-slate-300 p-3 rounded-md shadow-sm bg-white dark:bg-slate-300 dark:focus:bg-slate-700 dark:focus:text-slate-200 ${setColour(answer)}`}
            >
              {answer.answerText}
            </button>
          </div>
        ))}
      </section>

      {!showExplanation && (
        <details className="collapse bg-blue-100 dark:bg-slate-800 rounded-md shadow-sm dark:shadow-gray-800">
          <summary className="collapse-title text-base font-normal p-5 dark:text-slate-200 dark:text-opacity-70">
            Need a hint?
          </summary>
          <div className="collapse-content text-sm italic">
            <div>
              {beginnerQuestions.map((question) => (
                <div key={question.id}>
                  <p className="dark:text-slate-200 dark:text-opacity-70">
                    {question.hintText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </details>
      )}

      {showExplanation && (
        <details
          className={`collapse ${
            correct ? "bg-green-300 dark:bg-green-900 dark: text-slate-900 dark:text-slate-200" : "bg-red-300 text-slate-900 dark:bg-red-900 dark:text-slate-200"
          } rounded-md shadow-sm`}
        >
          <summary className="collapse-title text-base font-normal p-5">
            Explanation
          </summary>
          <div className="collapse-content text-sm italic">
            <div>{checkClicked && <p>{explanation}</p>}</div>
          </div>
        </details>
      )}

      {/* <div className="bg-slate-50 min-w-full h-[59.9rem] -z-10 absolute left-0 bottom-0 rounded-t-lg mt-4 shadow-lg border-t-4 border-gray-300 "></div> */}

      <div className="min-w-full bg-blue-100 fixed bottom-0 left-0 flex justify-center p-8 rounded-t-md border-t-4 border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <button
          onClick={handleCheckClick}
          className="p-3 w-full bg-white dark:bg-slate-200 dark:text-slate-900 rounded-md shadow-sm font-semibold"
          disabled={!selectedAnswer}
        >
          {alreadyAnswered ? "Already answered" : buttonText}
        </button>
      </div>
    </>
  );
}
