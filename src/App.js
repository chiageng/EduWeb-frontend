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
              path="/mycourses/:id"
              element={<MyCourseScreen></MyCourseScreen>}
            ></Route>
            <Route
              path="/mycourses/:id/myquiz"
              element={<MyQuizzesScreen></MyQuizzesScreen>}
            ></Route>
            <Route
              path="/mycourses/:id/myquiz/:quizid"
              element={<MyQuizScreen></MyQuizScreen>}
            ></Route>
             <Route
              path="/myprofile"
              element={<MyProfileScreen></MyProfileScreen>}
            ></Route>
            <Route
              path="/mycourses/:id/videos"
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
