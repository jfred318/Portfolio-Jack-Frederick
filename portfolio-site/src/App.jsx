// TO VIEW WHILE TESTING:
// CD directory
// npm run dev
import { ChevronDown } from 'lucide-react';
import Marquee from 'react-fast-marquee'; 
import { useState, useEffect } from 'react';
import ContentTemplate from "./components/ContentTemplate"; 
import ExperienceTimeline from "./components/ExperienceTimeline";
import ArtTemplate from "./components/ArtTemplate";
import BlogTemplate from "./components/BlogTemplate";





export default function App() {
  const scrollToNext = () => {
    document.querySelector('.snap-container').scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const sectionIndex = Math.round(scrollPosition / window.innerHeight);
      setActiveSection(sectionIndex);
    };
  
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  const sections = [
    { name: 'Home', id: 0 },
    { name: 'Projects', id: 1 },
    { name: 'Work Experience', id: 2 },
    { name: 'Art', id: 3 },
    { name: 'Blog', id: 4 }

  ];
  
  const scrollToSection = (index) => {
    document.querySelector('.snap-container').scrollTo({
      top: window.innerHeight * index,
      behavior: 'smooth'
    });
  };

  const facts = [
    "Auburn Student",
    "Software Engineering",
    "Long-Time Investor",
    "Music Production Club Founder",
    "Raised in Atlanta",
    "Experinced in Cybersecurity",
    "Die Hard Clippers Fan",
    "Favorite Food: Tacos",
    "Avid Golfer"
  ];
  
  const separator = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"; 
  const carouselContent = facts.join(separator);




  return (
    <>
      <div className="mobile-warning">
        <div>
          <h1>Desktop Experience</h1>
          <p>
            This site is designed for desktop viewing.<br />
            Please visit on a larger screen.
          </p>
          </div>
      </div>


      <div className="snap-container">
        {activeSection > 0 && (
          <div className="nav-dots">
            {sections.slice(1).map((section, index) => (
              <div
                key={section.id}
                className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
              >
                <span className="nav-dot-label">{section.name}</span>
              
                <div
                  className="nav-dot-circle"
                  onClick={() => scrollToSection(section.id)}
                ></div>
              </div>
            
            ))}
          </div>
        )}
    
        <div className="home-page snap-section">
          <h1 className="name first-name">JACK</h1>
          <h1 className="name last-name">FREDERICK</h1>
    
          <div className="title-box large-box carousel-box">
            <Marquee 
              speed={90}
              gradient={false}     
              loop={0}           
              style={{ width: '100%' }} 
            >
              <div className="marquee-content">
                {carouselContent}
              </div>
            </Marquee>
          </div>
    
          <button
            onClick={scrollToNext}
            className="scroll-arrow"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={48} strokeWidth={2} />
          </button>
        </div>
    
        <div className="snap-section">
          <ContentTemplate
            title="Projects"
            textSections={[
              `Stock Correlation & Metrics Analyzer

        The Idea
        Analyze relationships between multiple stocks and produce meaningful analytics.

        Features
        • Historical pricing showcase
        • Correlation and cointegration analysis
        • Risk and performance metrics
        • CSV and PDF reporting exports

        Outcome
        One of my most practically useful tools for evaluating market relationships.`,

              `Super Search (Unable to show image)

        The Idea
        Efficiently track and query assets accross the enterprise.

        Features
        • Fast search logic 
        • Designed for internal operational use
        • Description based filtering to identify related assets
      
        Outcome
        A technically advanced project built to solve real workplace problems.`,

              `Python Scripted Email Updater

        The Idea
        Automaticly email portfolio updates.

        Features
        • Automated data pulls
        • Summary metric generation
        • Scheduled email delivery
        • Powered by AWS

        Outcome
        Turned a manual task into a fully automated workflow.`,

              `Swung (Virtual Caddie Prototype)

        The Idea
        Estimate club distances and recommend shots based on user input and conditions.

        Features
        • Distance prediction logic
        • Weather and terrain adjustments
        • Mobile UI prototype

        Outcome
        An ambitious prototype that taught prepared me to take on large projects.`,

              `Backtest AI Stock Predictor

        The Idea
        Predict short-term stock movement using machine learning models.

        Features
        • Feature extraction from historical data
        • Model training and backtesting
        • Performance evaluation and iteration

        Outcome
        The model underperformed, but the project grew my understanding of ML models far greater than expected.`,

              `Work-It-Out

        The Idea
        Generate personalized workout routines without manual planning.

        Features
        • Rule-based routine generation
        • User input handling
        • Web-based interface

        Outcome
        A practical project focused on UX and UI design.`,

              `Skater’s Journey

        The Idea
        Learn programming fundamentals through a school project.

        Features
        • Basic game mechanics
        • Related to stories read in class
        • Early experimentation with logic and structure

        Outcome
        My first coding project — and the starting point for everything that followed.`,
            ]}
            images={[
              "Screenshot 2025-12-19 at 9.15.37 AM.png",
              "Search 2.png",
              "stockPicL 2.png",
              "stockPic3 2.png",
              "finSim 2.png",
              "Screenshot 2025-12-19 at 10.08.02 AM 2.png",
              "Screenshot 2025-12-17 at 9.53.07 AM 2.png",
            ]}
          />
        </div>

        <div className="snap-section">
          <ExperienceTimeline
            title="Work Experience"
            startYear={2018}
            endYear={2025}
            experiences={[
              {
                title: "Identity Security Intern",
                start: 2024,
                end: 2025,
                description: "Worked on threat identification, security automation, and risk analysis."
              },
              {
                title: "Music Production Club Founder",
                start: 2023,
                end: 2025,
                description: "Created a community, organized events, and taught music production."
              },
              {
                title: "Investor",
                start: 2019,
                end: 2025,
                description: "Managed a five digit portfolio that has consistently beat the S&P 500"
              },
              {
                title: "Golf Instructor",
                start: 2022,
                end: 2023,
                description: "Worked alongside 6 professional golfers and instructors molding young kids into gifted athletes"
              },
              {
                title: "Teacher's Assistant",
                start: 2022,
                end: 2023,
                description: "Shadowed the schools IB Environmental class and led instructional periods"
              },
              {
                title: "Soccer Referee",
                start: 2018,
                end: 2022,
                description: "Regulated the speed and safety of the game following the laws of Grassroots soccer"
              },
              {
                title: "Riverwood Internation Charter School",
                start: 2019,
                end: 2023,
                description: "Particpated in Varisty sports as well as community service and honors organizations"
              },
              {
                title: "Auburn University",
                start: 2023,
                end: 2025,
                description: "Studying software engineering while participating in various on-campus organizations"
              },
              {
                title: "Caddie",
                start: 2020,
                end: 2022,
                description: "Improved member's level of play while maintaining the prestige look of the club"
              }
            ]}
          />
        </div>
        

        {/* Art Section */}
        <div className="snap-section">
          <ArtTemplate
            title="Art"
            pieces={[
              {
                title: "AMP Logo",
                src: "AMP 2.png",
                top: "8%",
                left: "8%",
                size: "290px",
              },
              {
                title: "Personal Logo",
                src: "JFLogo 2.png",
                top: "10%",
                left: "68%",
                size: "220px",
              },
              {
                title: "AMP Flyer",
                src: "Flyer4 2.png",
                top: "46%",
                left: "6%",
                size: "210px",
              },
              {
                title: "Niche Logo",
                src: "NicheLogoElement 2.png",
                top: "50%",
                left: "77%",
                size: "200px",
              },
              {
                title: "Swung Logo",
                src: "SwungLogo 2.png",
                top: "32%",
                left: "28%",
                size: "200px",
              },
              {
                title: "Niche Logo Alt. 2",
                src: "NicheLogoHexWord 2.png",
                top: "64%",
                left: "40%",
                size: "230px",
              },
              {
                title: "Niche Logo Alt.",
                src: "NicheLogoSmallTable 2.png",
                top: "29%",
                left: "51%",
                size: "230px",
              },
            ]}
          />
        </div>


          
        <div className="snap-section">
          <BlogTemplate
            title="Blog"
            posts={[
              {
                date: "Dec 19, 2025",
                content: `Welcome to my blog!
                I write this as I wrap up the new design of my personal website. It has been both a fun and grueling process bringing this site to completion.

                My favorite part has easily been revisiting my old projects. For instance, Skater’s Journey was my first ever coding project (and it definitely looks like it), completed in the spring of 2023 for an English class. It’s crazy to think that one assignment has led me to where I am now, a third-year software engineering student at an incredible university.

                The drastic improvement in my skills over the past few years has inspired me to see how far I can go. This blog will share both my accomplishments and my ambitions: what I worked on throughout the day, as well as what’s keeping me up at night. I may not be a master of everything or a jack of all trades, but I believe I show passion in my work, and I hope those reading this see it too.`
              }
              
            ]}
          />
        </div>

      </div>
    </>
  );
}
