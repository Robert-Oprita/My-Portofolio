import { useTypewriter } from 'react-simple-typewriter';
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import SocialLink from '../components/SocialLink';
import profil from '../assets/Profil01.jpg';
import AnimationSections from '../components/animations/AnimationSections.jsx';
import ArrowAnimation from '../components/animations/ArrowAnimation';

const Home = () => {
  const [text] = useTypewriter({
    words: ['Robert Oprița', 'Frontend Developer'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 70,
  });
  return (
    <div
      className="wrapperHome bg-neutral-800 h-auto pb-8 flex flex-col items-center justify-start"
      id="home"
    >
      <div className="Signature mt-28 px-46 2xl:grid grid-cols-2-reverse">
        <img
          src={profil}
          alt="second profil"
          className="h-auto max-w-xs border-2 border-solid border-white md:max-w-sm lg:max-w-lg"
        />
        <div className="useTyper w-full mt-4 lg:mt-8 ">
          <span className="text-white text-2xl mr-3 ml-9 md:text-2xl md:ml-14 lg:text-4xl lg:ml-14">
            I&apos;m
          </span>
          <span className="font-bold text-orange-500 text-2xl md:text-2xl lg:text-4xl">
            {text}
          </span>
        </div>
      </div>

      <AnimationSections>
        <div className="findMe grow-0 h-14 mt-36 mb-24">
          <h1 className="text-center text-3xl text-white mb-2 lg:text-4xl bold">
            Find Me On:
          </h1>

          <div className="flex text-center">
            <a href="https://www.linkedin.com/in/robert-opri%C8%9Ba-9339b0223/">
              <SocialLink
                icon={
                  <BsLinkedin
                    size={40}
                    className="text-linkedin-blue hover:text-blue-600 active:text-blue-700"
                  />
                }
              />
            </a>
            <a href="https://github.com/Robert-Oprita">
              <SocialLink
                icon={
                  <BsGithub
                    size={40}
                    className="text-white hover:text-stone-400 active:text-black"
                  />
                }
              />
            </a>
            <a href="https://www.instagram.com/_robert_stefan29/">
              <SocialLink
                icon={
                  <BsInstagram
                    size={40}
                    className="text-instagram-purple hover:text-pink-500 active:text-red-600"
                  />
                }
              />
            </a>
            <a href="https://www.facebook.com/robertzu.robertzu/">
              <SocialLink
                icon={
                  <BsFacebook
                    size={40}
                    className="text-blue-700 hover:text-blue-800 active:text-blue-800"
                  />
                }
              />
            </a>
          </div>
        </div>
      </AnimationSections>
      <ArrowAnimation />
    </div>
  );
};

export default Home;
