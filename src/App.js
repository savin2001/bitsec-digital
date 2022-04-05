import { createTheme, ThemeProvider } from "@mui/material/styles";
import Poppins from "./media/poppins-v19-latin-regular.woff2"
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Article from "./pages/Article"
import Project from "./pages/Project";

// Remember to change in the blog section too
const topics = [
  "Finance",
  "Business",
  "Marketing",
  "Sales",
  "Design and development",
  "Technology",
];
const projects = [
  "Finance",
  "Business",
  "Marketing",
  "Sales",
  "Design and development",
  "Technology",
];

// This function changes the overall color of the whole application
const theme = createTheme({
    palette: {
        primary: {
            light: "#fff",
            main: "#F5F5F5",
            dark: "#000",
            contrastText: "#000",
            background: "#73adff",
        },
        secondary: {
            light: "#ff7961",
            main: "#000",
            dark: "#5d4037",
            contrastText: "#fff",
        },
    },
    typography: {
        subtitle1: {
            fontWeight: 100,
          },
        fontFamily: 'Poppins, sans-serif',
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Raleway';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Poppins'), local('Poppins-Regular'), url(${Poppins}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
      },
});


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <PrimarySearchAppBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="news" element={<News />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="article" element={<Article />}/>
                        <Route path="project" element={<Project/>}/>
                        {topics.map((topic) => (
                            <Route
                                path={topic}
                                element={<Article />}
                                key={topic}
                            />
                        ))}
                        {projects.map((project) => (
                            <Route
                                path={project}
                                element={<Project />}
                                key={project}
                            />
                        ))}
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
