const container = document.getElementById("root");
console.log(container);

const root = ReactDOM.createRoot(container);

const h2 = React.createElement(
  "h2",
  { style: { color: "orange" } },
  "Welcome to React",
);

const h1 = React.createElement(
  "h1",
  { style: { color: "brown", backgroundColor: "white" } },
  "ABES Engineering College",
);

const img = React.createElement("img", {
  src: "https://up.yimg.com/ib/th/id/OIP.L2C43-wv7BqtmOLmUVrYMQHaEA?pid=Api&rs=1&c=1&qlt=95&w=189&h=102",
  style: {
    height: "200px",
    width: "200px",
    borderRadius: "50%",
  },
});

// Resume Content

const name = React.createElement(
  "h2",
  { style: { color: "blue" } },
  "Sneha Gupta",
);

const about = React.createElement(
  "p",
  null,
  "B.Tech Computer Science Engineering student with an interest in Web Development, JavaScript and DSA.",
);

const email = React.createElement("p", null, "Email: sneha@example.com");

const phone = React.createElement("p", null, "Phone: 9876543210");

const educationHeading = React.createElement(
  "h3",
  { style: { color: "purple" } },
  "Education",
);

const education = React.createElement(
  "p",
  null,
  "B.Tech - Computer Science Engineering, ABES Engineering College",
);

const skillsHeading = React.createElement(
  "h3",
  { style: { color: "purple" } },
  "Skills",
);

const skills = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "C++"),
  React.createElement("li", null, "JavaScript"),
  React.createElement("li", null, "HTML & CSS"),
  React.createElement("li", null, "React"),
  React.createElement("li", null, "DSA"),
);

const projectsHeading = React.createElement(
  "h3",
  { style: { color: "purple" } },
  "Projects",
);

const projects = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Student Portal Website"),
  React.createElement("li", null, "AI Attendance System"),
  React.createElement("li", null, "Portfolio Website"),
);

// Main Div

const div = React.createElement(
  "div",
  {
    style: {
      border: "2px solid black",
      padding: "20px",
      width: "600px",
      margin: "20px auto",
      fontFamily: "Arial",
    },
  },
  h1,
  h2,
  img,
  name,
  about,
  email,
  phone,
  educationHeading,
  education,
  skillsHeading,
  skills,
  projectsHeading,
  projects,
);

root.render(div);
