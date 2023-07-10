import { Container } from "@mui/material";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./navbar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MyCoursesScreen from "./screens/MyCoursesScreen";
import MyCourseScreen from "./screens/MyCourseScreen";
import VideoScreen from "./screens/VideoScreen";
import "../node_modules/video-react/dist/video-react.css";
import CoursesScreen from "./screens/CoursesScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MyQuizzesScreen from "./screens/MyQuizzesScreen";
import { MyQuizScreen } from "./screens/MyQuizScreen";
import ShoppingCartScreen from "./screens/ShoppingCartScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import CreateCourseScreen from "./screens/CreateCourseScreen";
import CreateTopicScreen from "./screens/CreateTopicScreen";
import EditCourseScreen from "./screens/EditCourseScreen";
import CreateQuizScreen from "./screens/CreateQuizScreen";
import EditTopicScreen from "./screens/EditTopicScreen";
import CourseScreen from "./screens/CourseScreen";
import InstructorQuizScreen from "./screens/InstructorQuizScreen";
import CreateQuizQuestionScreen from "./screens/CreateQuizQuestion";
import EditQuizQuestionScreen from "./screens/EditQuizQuestion";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/courses" element={<CoursesScreen />}></Route>
            <Route path="/mycourses" element={<MyCoursesScreen />}></Route>
            <Route path="/createcourse" element={<CreateCourseScreen />}></Route>
            <Route
              path="/mycourses/:slug"
              element={<MyCourseScreen></MyCourseScreen>}
            ></Route>
            <Route
              path="/courses/:slug"
              element={<CourseScreen></CourseScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/edit"
              element={<EditCourseScreen></EditCourseScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/createtopic"
              element={<CreateTopicScreen/>}
            ></Route>
             <Route
              path="/mycourses/:slug/edittopic/:topic_id"
              element={<EditTopicScreen/>}
            ></Route>
            <Route
              path="/mycourses/:slug/myquiz"
              element={<MyQuizzesScreen></MyQuizzesScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/myquiz/create"
              element={<CreateQuizScreen></CreateQuizScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/myquiz/:quizSlug"
              element={<MyQuizScreen></MyQuizScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/myquiz/:quizSlug/instructor"
              element={<InstructorQuizScreen></InstructorQuizScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/myquiz/:quizSlug/instructor/create"
              element={<CreateQuizQuestionScreen></CreateQuizQuestionScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/myquiz/:quizSlug/instructor/:questionId/edit"
              element={<EditQuizQuestionScreen></EditQuizQuestionScreen>}
            ></Route>
             <Route
              path="/myprofile"
              element={<MyProfileScreen></MyProfileScreen>}
            ></Route>
            <Route
              path="/mycourses/:slug/:topicSlug"
              element={<VideoScreen />}
            ></Route>
            <Route path="/shoppingcart" element={<ShoppingCartScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/signup" element={<RegisterScreen />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
