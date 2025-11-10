import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CourseDetails from "./components/CourseDetails";
import EnrollmentForm from "./components/EnrollmentForm";
import PaymentConfirmation from "./components/PaymentConfirmation";

function App() {
  return (
    <Router>
      <Navbar />
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