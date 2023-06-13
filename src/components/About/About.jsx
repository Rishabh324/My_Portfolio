import "./about.css";
import Me from "../../assets/Profile.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={Me}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title"><span>A</span>bout <span>Me</span></h1>
                <p className="a-sub">
                    Student, IIIT Sonepat(B.Tech, CSE, 2nd-year)
                </p>
                <p className="a-desc">
                    I am currently a Sophomore at the Indian Institute of Information Technology, Sonepat, where I am pursuing a B. Tech degree in Computer Science and Engineering. I have developed strong skills in Problem Solving, Project Management, Analytics, and Logical Thinking, which I believe are valuable assets for any professional setting. Now, I am eagerly anticipating the opportunity to gain my first work experience and contribute to the field I am passionate about.
                </p>
                <p className="a-award">
                    My skills include ReactJS, JavaScript, CSS, HTML, Node.js, Express, competitve programming(C++).
                </p>
            </div>
        </div>
    );
};

export default About;