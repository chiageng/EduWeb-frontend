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

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen/>}></Route>
              <Route path='/mycourses' element={<MyCoursesScreen/>}></Route>
              <Route
                path="/mycourses/:id"
                element={<MyCourseScreen></MyCourseScreen>}
              ></Route>
              <Route path='/mycourses/:id/videos' element={<VideoScreen/>}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
