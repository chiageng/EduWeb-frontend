const DUMMY_TOPICS =  [
  {'_id': '1','title': 'title 1', 'description' : 'description 1'},
  {'_id': '2','title': 'title 2', 'description' : 'description 2'},
  {'_id': '3','title': 'title 3', 'description' : 'description 3'},
  {'_id': '4','title': 'title 4', 'description' : 'description 4'},
  {'_id': '5','title': 'title 5', 'description' : 'description 5'},
]

const DUMMY_QUIZZES =  [
  {'_id': '1','title': 'quiz 1', 'done': true,},
  {'_id': '2','title': 'quiz 2', 'done': true,},
  {'_id': '3','title': 'quiz 3', 'done': false,},
  {'_id': '4','title': 'quiz 4', 'done': false,},
  {'_id': '5','title': 'quiz 5', 'done': false,},
]


export const courses = [
  {
    '_id': '1',
    'title': 'Science',
    'image': '/images/Science.jpg',
    'category': 'Form 1',
    'rating': '5',
    'numViews': '100',
    'numReviews': '20',
    'topics':DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '20',
    'price': '300.00',
    'instructor': 'CS Wong',
  }, 
  {
    '_id': '2',
    'title': 'Maths',
    'image': '/images/Maths.jpg',
    'category': 'Form 1',
    'rating': '4.5',
    'numViews': '150',
    'numReviews': '30',
    'topics': DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '30',
    'price': '300.00',
    'instructor': 'YH Lee',
  },
  {
    '_id': '3',
    'title': 'Chinese',
    'image': '/images/Chinese.jpg',
    'category': 'Form 1',
    'rating': '5',
    'numViews': '200',
    'numReviews': '30',
    'topics': DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '0',
    'price': '300.00',
    'instructor': 'CG Chng',
  },
  {
    '_id': '4',
    'title': 'Malay',
    'image': '/images/Malay.png',
    'category': 'Form 1',
    'rating': '4',
    'numViews': '50',
    'numReviews': '30',
    'topics': DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '100',
    'price': '300.00',
    'instructor': 'Bobo',
  },
  {
    '_id': '5',
    'title': 'Science',
    'image': '/images/Science.jpg',
    'category': 'Form 2',
    'rating': '5',
    'numViews': '100',
    'numReviews': '20',
    'topics':DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '50',
    'price': '300.00',
    'instructor': 'CS Wong',
  }, 
  {
    '_id': '6',
    'title': 'Maths',
    'image': '/images/Maths.jpg',
    'category': 'Form 2',
    'rating': '4.5',
    'numViews': '150',
    'numReviews': '30',
    'topics': DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '40',
    'price': '300.00',
    'instructor': 'YH Lee',
  },
  {
    '_id': '7',
    'title': 'Chinese',
    'image': '/images/Chinese.jpg',
    'category': 'Form 2',
    'rating': '5',
    'numViews': '200',
    'numReviews': '30',
    'topics': DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '80',
    'price': '300.00',
    'instructor': 'CG Chng',
  },
  {
    '_id': '8',
    'title': 'Malay',
    'image': '/images/Malay.png',
    'category': 'Form 2',
    'rating': '4',
    'numViews': '50',
    'numReviews': '30',
    'topics': DUMMY_TOPICS,
    'quiz': DUMMY_QUIZZES,
    'progress': '70',
    'price': '300.00',
    'instructor': 'Bobo',
  }
  
]
