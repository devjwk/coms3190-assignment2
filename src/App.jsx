import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CourseDetails from "./components/CourseDetails";
import EnrollmentForm from "./components/EnrollmentForm";
import PaymentConfirmation from "./components/PaymentConfirmation";

function App() {
  return (
    <Router>
      {/* ✅ Navbar은 모든 페이지 위에 항상 표시 */}
      <Navbar />

      {/* 아래는 페이지 전환 영역 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/enroll" element={<EnrollmentForm />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;