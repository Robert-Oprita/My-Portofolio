import { Tilt } from 'react-tilt';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};

const ProjectCard = () => {
  return (
    <Tilt options={defaultOptions}>
      <div className="h-96 w-72 bg-orange-400 rounded gap-4 mb-14 flex items-end justify-end">
        <a href="#">
          <p>Coming soon...</p>
        </a>
      </div>
    </Tilt>
  );
};
export default ProjectCard;
