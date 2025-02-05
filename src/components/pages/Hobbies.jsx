import TypeWriterEffect from "react-typewriter-effect";
import guitar from "../assets/guitar.jpg";
import drums from "../assets/drumming.jpg";
import music from "../assets/drumset.jpg";
import cover from "../assets/drum_ss.jpg";
import nature from "../assets/nature.jpg";
import Footer from "../Footer";
import Carousel from "react-bootstrap/Carousel";
import ImageGallery from "react-image-gallery";
import Stack from "react-bootstrap/Stack";
import Header from "../Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Hobbies() {
  const myRef = document.querySelector(".scrollable-div");
  const handleDragStart = (e) => e.preventDefault();
  const styles = {
    width: "100%", // Make sure it scales with the carousel container
    height: "500px", // Fixed height for consistent rectangle format
    objectFit: "cover", // Ensures the image fills the rectangle
    borderRadius: "10px", // Optional: adds rounded corners
    backgroundColor: "black", // Fills any empty space if using "contain"
  };
  const images = [
    {
      original: drums,
      thumbnail: drums,
      originalTitle: "Kirby",
      //description: "AI Recipe Recommendation App",
      originalHeight: "300px",
    },
    {
      original: cover,
      thumbnail: cover,
      description: "Jazz Performance",
      originalHeight: "300px",
    },
    {
      original: music,
      thumbnail: music,
      description: "Drum simulator",
      originalHeight: "300px",
    },

    {
      original: guitar,
      thumbnail: guitar,
      description: "Spotify Clone",
      originalHeight: "300px",
    },
  ];

  return (
    <>
      <Header />
      <br />
      <br />
      <Stack gap={2}>
        <div style={{ padding: "35px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.5em",
              textAlign: "center",
            }}
            startDelay={100}
            cursorColor="black"
            text="My Life as a Musician..."
            typeSpeed={100}
            s
          />
        </div>
        <Container fluid="lg">
          <Row lg={2}>
            <Col>
              <p style={{ fontSize: "1.1rem" }}>
                <strong>Music has always been a huge part of my life.</strong>
                <br></br>I play drums, guitar, bass, and a variety of percussion
                instruments, and I spent several years working as a studio
                musician. During that time, I performed everywhere from local
                clubs in Ventura, CA; the Pasadena Civic Center in Pasadena, CA;
                on a boat for a parade in Oxnard, CA; and even had the unique
                experience of performing at NAMM 2020 in Anaheim, CA, opening
                for <b>Tower&nbsp;of&nbsp;Power</b>. I was also the studio
                drummer of the jazz ensemble The&nbsp;Jazz&nbsp;Lawyers,
                contributing to the writing and recording of their debut album,{" "}
                <i>Identity&nbsp;Theft</i>, which is available for streaming on
                Spotify and Apple Music.
                <br></br>
                Now, I play drums in my spare time and enjoy recording and
                mixing covers to share online. Music continues to be a creative
                outlet for me, blending performance with production.
              </p>
            </Col>
            <Col>
              <ImageGallery
                items={images}
                thumbnailPosition="bottom"
                autoPlay
                infinite
              />
            </Col>
          </Row>
        </Container>

        <br></br>

        <div style={{ padding: "35px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.5em",
              textAlign: "center", // Ensures the text is centered properly
            }}
            startDelay={100}
            cursorColor="black"
            text="My Work as a Video Editor..."
            typeSpeed={100}
            s
          />
        </div>
        <Container>
          <Stack direction="horizontal" gap={2}>
            <div className="p-2">
              <p style={{ fontSize: "1.1rem" }}>
                In addition to my work as a musician, I have several years of
                experience as a video editor and content analyst, combining
                creativity with data-driven decision-making. I specialize in
                video and audio workflows, utilizing Ableton&nbsp;Live, Adobe
                Premiere&nbsp;Pro, Adobe After&nbsp;Effects, and Photopea to
                produce high-quality content across various platforms.
                <br></br>I personally oversee and manage two separate content
                businesses, handling everything from editing and post-production
                to branding and audience engagement strategies. Beyond editing,
                I take a data-driven approach to content performance, analyzing
                various metrics from my channel and video data using{" "}
                <b>Python</b> to optimize audience retention, engagement, and
                growth. By leveraging data analytics, I refine content
                strategies, improve video pacing, and enhance storytelling to
                maximize impact.{" "}
              </p>
            </div>
            <div className="p-2">
              <img src={music} width="450px" height="300px" />
            </div>
          </Stack>
        </Container>
        <div style={{ padding: "55px" }}>
          <TypeWriterEffect
            textStyle={{
              fontSize: "2.5em",
              textAlign: "center", // Ensures the text is centered properly
            }}
            startDelay={100}
            cursorColor="black"
            text="More About Me..."
            typeSpeed={100}
            s
          />
        </div>
        <Container>
          <Stack direction="horizontal" gap={2}>
            <div className="p-2">
              <p style={{ fontSize: "1.1rem" }}>
                Outside of music and video editing, I enjoy staying active and
                exploring the outdoors. Whether it’s hiking through National
                Parks like Yosemite and Sequoia, relaxing at the beach, or
                discovering new trails, I love experiencing nature whenever I
                can. I’m also passionate about fitness and working out, seeing
                it as both a challenge and a way to stay balanced. <br></br>
                Another fun fact about me—I speak three languages: English,
                Spanish, and Japanese. Learning new languages has given me a
                deeper appreciation for different cultures and perspectives, and
                I enjoy finding ways to connect with people through language and
                shared experiences.
              </p>
            </div>
            <div className="p-2">
              <img src={music} width="450px" height="300px" />
            </div>
          </Stack>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}
