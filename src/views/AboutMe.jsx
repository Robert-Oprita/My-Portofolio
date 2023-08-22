import TitleSections from '../components/TitleSections';
import Button from '../components/Button';
import TextAnimation from '../components/animations/TextAnimation';

const AboutMe = () => {
  return (
    <div
      className="aboutMe h-auto bg-neutral-800 pt-36 lg:pt-44 pb-44 top-0 left-0 right-0"
      id="aboutMe"
    >
      <TitleSections titleS="About Me" />

      <div className="descriptionAbout bg-neutral-800 flex flex-col items-center mt-14 px-10 w-100 md:px-20">
        <TextAnimation>
          <ul className="rounded-2xl text-white text-2xl mb-6 font-primary">
            <li>
              I am a Frontend developer with a{' '}
              <span className="text-orange-500 italic text-2xl">passion</span>{' '}
              for building beautiful and user-friendly websites.
            </li>

            <li>
              I am ecited to put my skills to use in a professional setting.
            </li>

            <li>
              I am <span>quick lerner and a team player</span>, and I am
              confident that I can be valuable asset to any web developer{' '}
              <span>team.</span>
            </li>
          </ul>
        </TextAnimation>
        <Button />
      </div>
    </div>
  );
};
export default AboutMe;
