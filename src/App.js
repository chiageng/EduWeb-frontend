import { Container } from "@mui/material";
import "./App.css";
import Footer from "./footer/Footer";
import Header from "./navbar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/StudentScreen/HomeScreen";
import MyCoursesScreen from "./screens/StudentScreen/MyCoursesScreen";
import MyCourseScreen from "./screens/StudentScreen/MyCourseScreen";
import VideoScreen from "./screens/StudentScreen/VideoScreen";
import "../node_modules/video-react/dist/video-react.css";
import CoursesScreen from "./screens/StudentScreen/CoursesScreen";
import LoginScreen from "./screens/StudentScreen/LoginScreen";
import RegisterScreen from "./screens/StudentScreen/RegisterScreen";
import MyQuizzesScreen from "./screens/StudentScreen/MyQuizzesScreen";
import { MyQuizScreen } from "./screens/StudentScreen/MyQuizScreen";
import ShoppingCartScreen from "./screens/StudentScreen/ShoppingCartScreen";
import MyProfileScreen from "./screens/StudentScreen/MyProfileScreen";
import CreateCourseScreen from "./screens/AdminScreen/CreateCourseScreen";
import CreateTopicScreen from "./screens/AdminScreen/CreateTopicScreen";
import EditCourseScreen from "./screens/AdminScreen/EditCourseScreen";
import CreateQuizScreen from "./screens/AdminScreen/CreateQuizScreen";
import EditTopicScreen from "./screens/AdminScreen/EditTopicScreen";
import CourseScreen from "./screens/StudentScreen/CourseScreen";
import AdminQuizScreen from "./screens/AdminScreen/AdminQuizScreen";
import CreateQuizQuestionScreen from "./screens/AdminScreen/CreateQuizQuestion";
import EditQuizQuestionScreen from "./screens/AdminScreen/EditQuizQuestion";
import EditProfileScreen from "./screens/StudentScreen/EditProfileScreen";
import StudentEnrollments from "./screens/StudentScreen/StudentEnrollments";
import AdminLoginScreen from "./screens/AdminScreen/AdminLoginScreen";
import AdminDashboard from "./screens/AdminScreen/AdminDashboard";
import AdminCourses from "./screens/AdminScreen/AdminCourses";
import { Main } from "./navbar/AdminAppBar";
import AdminQuizzesScreen from "./screens/AdminScreen/AdminQuizzes";
import AdminCourseScreen from "./screens/AdminScreen/AdminCourse";
import EditQuizScreen from "./screens/AdminScreen/EditQuizScreen";
import AdminVideoScreen from "./screens/AdminScreen/AdminVideoScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/courses" element={<CoursesScreen />}></Route>
          <Route path="/mycourses" element={<MyCoursesScreen />}></Route>

          <Route
            path="/mycourses/:slug"
            element={<MyCourseScreen></MyCourseScreen>}
          ></Route>
          <Route
            path="/mycourses/checkStudentsEnrollment/:slug"
            element={<StudentEnrollments />}
          ></Route>
          <Route
            path="/courses/:slug"
            element={<CourseScreen></CourseScreen>}
          ></Route>

          <Route
            path="/mycourses/:slug/myquiz"
            element={<MyQuizzesScreen></MyQuizzesScreen>}
          ></Route>
          
          <Route
            path="/mycourses/:slug/myquiz/:quizSlug"
            element={<MyQuizScreen></MyQuizScreen>}
          ></Route>

          

          <Route
            path="/myprofile"
            element={<MyProfileScreen></MyProfileScreen>}
          ></Route>
          <Route
            path="/myprofile/edit"
            element={<EditProfileScreen></EditProfileScreen>}
          ></Route>
          <Route
            path="/mycourses/:slug/:topicSlug"
            element={<VideoScreen />}
          ></Route>
          <Route path="/shoppingcart" element={<ShoppingCartScreen />}></Route>
          <Route path="/login" element={<LoginScreen />}></Route>
          <Route path="/signup" element={<RegisterScreen />}></Route>
          <Route path="/admin/login" element={<AdminLoginScreen />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route path="/admin/courses" element={<AdminCourses />}></Route>
          <Route
            path="/admin/createcourse"
            element={<CreateCourseScreen />}
          ></Route>
          <Route
            path="/admin/courses/:slug/edit"
            element={<EditCourseScreen></EditCourseScreen>}
          ></Route>
          <Route
            path="/admin/courses/:slug"
            element={<AdminCourseScreen></AdminCourseScreen>}
          ></Route>
          <Route
            path="/admin/courses/:slug/quiz"
            element={<AdminQuizzesScreen></AdminQuizzesScreen>}
          ></Route>
          <Route
            path="/admin/courses/:slug/createtopic"
            element={<CreateTopicScreen />}
          ></Route>
          <Route
            path="/admin/courses/:slug/edittopic/:topic_id"
            element={<EditTopicScreen />}
          ></Route>
          <Route
            path="/admin/courses/:slug/quiz/:quizSlug/"
            element={<AdminQuizScreen />}
          ></Route>
          <Route
            path="/admin/courses/:slug/quiz/:quizSlug/:questionId"
            element={<EditQuizQuestionScreen></EditQuizQuestionScreen>}
          ></Route>
          <Route
            path="/admin/courses/:slug/quiz/create"
            element={<CreateQuizScreen></CreateQuizScreen>}
          ></Route>
          <Route
            path="/admin/courses/:slug/quiz/:quizSlug/edit"
            element={<EditQuizScreen></EditQuizScreen>}
          ></Route>
          <Route
            path="/admin/courses/:slug/quiz/:quizSlug/create"
            element={<CreateQuizQuestionScreen></CreateQuizQuestionScreen>}
          ></Route>
          <Route
            path="/admin/courses/:slug/:topicSlug"
            element={<AdminVideoScreen />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
