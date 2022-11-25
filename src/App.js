import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Bhagavad Gita has ___ chapters',
			answerOptions: [
				{ answerText: '108', isCorrect: false },
				{ answerText: '19', isCorrect: false },
				{ answerText: '18', isCorrect: true },
				{ answerText: '111', isCorrect: false },
			],
		},
		{
			questionText: 'Bhagwad Gita is a part of ______ scripture.',
			answerOptions: [
				{ answerText: 'Garuda Puran', isCorrect: false },
				{ answerText: 'Mahabharat', isCorrect: true },
				{ answerText: 'Srimad Bhagwatam', isCorrect: false },
				{ answerText: 'Chaitanya Caritarmrita', isCorrect: false },
			],
		},
		{
			questionText: 'Krishna spoke Bhagwad Gita to Arjuna in the battlefield of _____',
			answerOptions: [
				{ answerText: 'Kurukshetra', isCorrect: true },
				{ answerText: 'Haridwar', isCorrect: false },
				{ answerText: 'Rishikesh', isCorrect: false },
				{ answerText: 'Varanasi', isCorrect: false },
			],
		},
		{
			questionText: 'There are ___ number of shlokas in Bhagwad Gita.',
			answerOptions: [
				{ answerText: '500', isCorrect: false },
				{ answerText: '108', isCorrect: false },
				{ answerText: '1100', isCorrect: false },
				{ answerText: '700', isCorrect: true },
			],
		},
		{
			questionText: 'The author of Bhagwad Gita is _______',
			answerOptions: [
				{ answerText: 'Valmiki rishi', isCorrect: false },
				{ answerText: 'Vasistha Muni', isCorrect: false },
				{ answerText: 'Ved Vyas rishi', isCorrect: true },
				{ answerText: 'Vishwamitra Muni', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setanswers] = useState(new Array(questions.length));
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [scoreset, setScoreset] = useState(new Array(questions.length));

	// useEffect(()=>{
	// 	console.log(answers)
	// },[answers])

	const handleAnswerOptionClick = (ans,isCorrect) => {
		// if (isCorrect) {
		// 	setScore(score + 1);
		// }
		var sco = [...scoreset];
		sco[currentQuestion] = isCorrect;
		setScoreset(sco)
		var answe = [...answers];
		answe[currentQuestion] = ans;
		setanswers(answe)
		console.log(sco,answe)
		// const nextQuestion = currentQuestion + 1;
		// if (nextQuestion < questions.length) {
		// 	setCurrentQuestion(nextQuestion);
		// } else {
		// 	setShowScore(true);
		// }
	};

	const SubmitScore = () =>{
		var scoo = 0 ;
		scoreset.map(x=>x&&scoo++);
		console.log(scoo)
		setScore(scoo);
		setShowScore(true)
	}
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption,key) =>
							answerOption.answerText===answers[currentQuestion]?
							<button key={key} className='selected' onClick={() => handleAnswerOptionClick(answerOption.answerText,answerOption.isCorrect)}>{answerOption.answerText}</button>:
							<button key={key} onClick={() => handleAnswerOptionClick(answerOption.answerText,answerOption.isCorrect)}>{answerOption.answerText}</button>
						)}
					</div>
					<div className='buttons'>
						<button onClick={()=>currentQuestion===0 ? setCurrentQuestion(0) : setCurrentQuestion(currentQuestion-1)}>PREV</button>
						{currentQuestion+1<questions.length?<button onClick={()=>setCurrentQuestion(currentQuestion+1)}>NEXT</button> :<button onClick={()=>SubmitScore()}>SUBMIT</button>}
					</div>
				</>
			)}
		</div>
	);
}
