const DUMMY_TOPICS = [
  { _id: "1", title: "title 1", description: "description 1" },
  { _id: "2", title: "title 2", description: "description 2" },
  { _id: "3", title: "title 3", description: "description 3" },
  { _id: "4", title: "title 4", description: "description 4" },
  { _id: "5", title: "title 5", description: "description 5" },
];

const DUMMY_QUIZZES = [
  { _id: "1", title: "quiz 1", done: true, result: "14/50" },
  { _id: "2", title: "quiz 2", done: true, result: "14/50" },
  { _id: "3", title: "quiz 3", done: false },
  { _id: "4", title: "quiz 4", done: false },
  { _id: "5", title: "quiz 5", done: false },
];

export const DUMMY_QUIZ = [
  {
    id: "1",
    question: "Earth moving around the sun at  ____________ per hour",
    answers: ["670,000 miles", "67,000 miles", "6,700 miles", "670 miles"],
    correctAnswer: "67,000 miles",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "2",
    question: "Earth is Mostly Comprised of the following except ________",
    answers: ["Iron", "Air", "Silicon", "Oxygen"],
    correctAnswer: "Air",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "3",
    question: "The highest recorded temperature on Earth is  ________",
    answers: [
      "134 degrees Fahrenheit",
      "34 degrees Fahrenheit",
      "20 degrees Fahrenheit",
      "160 degrees Fahrenheit",
    ],
    correctAnswer: "134 degrees Fahrenheit",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "5",
    question: "Earth is 4.5 Billion Years Old",
    answers: ["True", "False"],
    correctAnswer: "True",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "6",
    question: "The lowest recorded temperature on Earth is _______",
    answers: [
      "128.5 degrees Fahrenheit",
      "0 degrees Fahrenheit",
      "-100.5 degrees Fahrenheit",
      "-128.5 degrees Fahrenheit",
    ],
    correctAnswer: "-128.5 degrees Fahrenheit",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "7",
    question: "The Earth Atmosphere Extends to a Distance of 10,000 km",
    answers: ["False", "True", "Maybe"],
    correctAnswer: "True",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "8",
    question: "A year on Earth is exactly ______ days ",
    answers: ["366", "365", "365.2564", "300"],
    correctAnswer: "365.2564",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "9",
    question: "",
    answers: [
      "nearly 30 kilometers per second",
      "nearly 30 meters per second",
      "nearly 30 kilometers per minute",
      "nearly 30 meters per minute",
    ],
    correctAnswer: "nearly 30 kilometers per second",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
  {
    id: "10",
    question: "Earth is Almost a Sphere",
    answers: ["True", "False", "I don't know"],
    correctAnswer: "True",
    explanation: "Because this is the explanation",
    mySolution: "",
  },
];

export const courses = [
  {
    _id: "1",
    title: "Science",
    image: "/images/Science.jpg",
    category: "Form 1",
    rating: "5",
    numViews: "100",
    numReviews: "20",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "20",
    price: "300.00",
    instructor: "CS Wong",
  },
  {
    _id: "2",
    title: "Maths",
    image: "/images/Maths.jpg",
    category: "Form 1",
    rating: "4.5",
    numViews: "150",
    numReviews: "30",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "30",
    price: "300.00",
    instructor: "YH Lee",
  },
  {
    _id: "3",
    title: "Chinese",
    image: "/images/Chinese.jpg",
    category: "Form 1",
    rating: "5",
    numViews: "200",
    numReviews: "30",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "0",
    price: "300.00",
    instructor: "CG Chng",
  },
  {
    _id: "4",
    title: "Malay",
    image: "/images/Malay.png",
    category: "Form 1",
    rating: "4",
    numViews: "50",
    numReviews: "30",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "100",
    price: "300.00",
    instructor: "Bobo",
  },
  {
    _id: "5",
    title: "Science",
    image: "/images/Science.jpg",
    category: "Form 2",
    rating: "5",
    numViews: "100",
    numReviews: "20",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "50",
    price: "300.00",
    instructor: "CS Wong",
  },
  {
    _id: "6",
    title: "Maths",
    image: "/images/Maths.jpg",
    category: "Form 2",
    rating: "4.5",
    numViews: "150",
    numReviews: "30",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "40",
    price: "300.00",
    instructor: "YH Lee",
  },
  {
    _id: "7",
    title: "Chinese",
    image: "/images/Chinese.jpg",
    category: "Form 2",
    rating: "5",
    numViews: "200",
    numReviews: "30",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "80",
    price: "300.00",
    instructor: "CG Chng",
  },
  {
    _id: "8",
    title: "Malay",
    image: "/images/Malay.png",
    category: "Form 2",
    rating: "4",
    numViews: "50",
    numReviews: "30",
    topics: DUMMY_TOPICS,
    quiz: DUMMY_QUIZZES,
    progress: "70",
    price: "300.00",
    instructor: "Bobo",
  },
];
