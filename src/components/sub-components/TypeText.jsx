"use client"
//importing typewriter-effect
import Typewriter from "typewriter-effect";

export default function TypeText() {
  return (
    <h1 className="my-name mt-2">
      <Typewriter
        options={{
          strings: [
            "Frontend Developer",
            "BackEnd Developer",
            "Full Stack Web Developer",
            "Web Application Expert",
            "Wordpress Designer",
          ],
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50) // Adjust typing speed as needed
            .pauseFor(1000)
            .deleteAll()
            .typeString("Muhammad Saroar")
            .start();
        }}
      />
    </h1>
  );
}
