# 🧭 Team Collaboration Instruction  
### (For Home & Enrollment Views)

---

## 👤 Member 1 — Responsibilities

### 🏠 Home.jsx (Browse Courses View)
- Implemented a **Netflix-style horizontal scroll** interface.  
- Courses are grouped by category:
  - *Software Development*, *AI & ML*, *Theory of Computation*.
- Dynamically loads course data from `src/data/courses.json`.
- Each course card includes:
  - Thumbnail, Title, Instructor, Description, Price, and a **“View Details”** button.
- When “View Details” is clicked:
  - Navigates to `CourseDetails.jsx`
  - Passes the selected course data using React Router’s **state**.

---

### 📝 EnrollmentForm.jsx (Enrollment Form View)
- Retrieves selected course data using **`useLocation()`**.  
- Displays the course information at the top of the form.
- Handles input changes using **`useState`** and **`onChange`**.
- Includes validation:
  - All fields required
  - Valid email format check
- On submit:
  - Navigates to **`PaymentConfirmation.jsx`**
  - Passes collected form data through route state.

---

## ⚙️ Collaboration Guidelines

### 🧩 1. Keep Data Structure Consistent
> Do **not** modify the structure of `src/data/courses.json`.

```json
{
  "category": "Software Development",
  "courses": [
    {
      "title": "...",
      "instructor": "...",
      "description": "...",
      "price": "...",
      "image": "/images/..."
    }
  ]
}

##	You can add new courses or categories,
but key names must remain exactly the same (title, instructor, description, price, image).
Image paths starting with /images/ reference files inside the public/images/ folder.

##	Navigation flow:
Home → CourseDetails → EnrollmentForm → PaymentConfirmation

## 	Always navigate with the route state like this:
navigate("/enroll", { state: { course } });
##  This ensures EnrollmentForm receives the course data through useLocation().state.

## 🎨 3. Tailwind CSS Consistency
	All pages (Home, CourseDetails, EnrollmentForm, PaymentConfirmation) must share the same:
	Color scheme, font style, and spacing system.
	Use consistent Tailwind utility classes such as:

bg-gray-900
text-white
rounded-lg
shadow-md
hover:scale-105
transition-all

## 	Horizontal scroll sections (overflow-x-scroll) should follow the same layout pattern as used in Home.jsx.
	Use consistent spacing utilities like space-x-4 or gap-x-6.

## 🧠 4. State & Data Flow

The application’s data flow between views must remain intact.

Home → CourseDetails → EnrollmentForm → PaymentConfirmation
## 	•	Course data is passed using React Router’s state.
	•	Do not change the shape of the data object between components.
It must always follow this structure:

{ state: { course } }
## If you modify the data format, other components depending on it will break.

##🧪 5. Testing Notes

## Refreshing the browser on the EnrollmentForm page resets useLocation().state,
which means the form will appear empty — this is expected behavior.
Always test navigation by following the complete flow:

#Recommend Project Structure
NM_15_NEW/
 ┣ public/
 ┃ ┗ images/
 ┃   ┣ full-stack-web-development.jpg
 ┃   ┣ react-patterns.jpg
 ┃   ┗ ai-intro.jpg
 ┣ src/
 ┃ ┣ components/
 ┃ ┃ ┣ Home.jsx
 ┃ ┃ ┣ CourseDetails.jsx
 ┃ ┃ ┣ EnrollmentForm.jsx
 ┃ ┃ ┗ PaymentConfirmation.jsx
 ┃ ┗ data/
 ┃   ┗ courses.json
 ┣ App.jsx
 ┣ index.css
 ┣ main.jsx
 ┗ tailwind.config.js







