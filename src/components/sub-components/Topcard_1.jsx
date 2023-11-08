import TypeText from "./TypeText";

export default function TopCard1() {
  return (
    <>
      <div className="w-full rounded-[20px] bg-dark p-8 mb-8">
        <p className="text font-bold">Introducing with a</p>
        <h1 className="text-6xl my-5 font-bebas tracking-wider">Professional <span className="text-brandColor"><TypeText /></span></h1>
        <p className="text-base text-slate-200">
          Full Stack Web Developer and Web Application specializing in front-end
          and back-end development. Experienced with all stages of the
          development cycle for dynamic websites. Well versed in numerous
          programming languages JavaScript ES6 Nodejs, structured language HTML5
          CSS3, open-source front-end JavaScript library ReactJS, NextJS With
          MongoDB & MySql Database.
        </p>
      </div>
    </>
  );
}
