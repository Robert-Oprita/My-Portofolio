import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';

function TechnicalSkills(props) {
  const { imgSkill, progress, progressColor, titleSkill } = props;
  return (
    <div className="bg-white shadow-slate-400 shadow-2xl md:border-2 border-double border-slate-400 flex flex-col mb-5 mt-2 md:flex-row-2 mr-4 ml-2 xl:mr-6">
      <div className="bg-white pt-1 h-48 w-72 lg:w-72 flex justify-center px-12 2xl:w-80">
        {imgSkill}
      </div>

      <ProgressBar progress={progress} color={progressColor} />

      <p className="text-ml font-sans text-black text-center pt-2 pb-1 font-semibold">
        {titleSkill}
      </p>
    </div>
  );
}

export default TechnicalSkills;

TechnicalSkills.propTypes = {
  progress: PropTypes.string,
  imgSkill: PropTypes.object,
  titleSkill: PropTypes.string,
  progressColor: PropTypes.string,
};
