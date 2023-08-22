import TitleSections from './TitleSections';
import PropTypes from 'prop-types';

function Knowledge(props) {
  const { exp, info, coming, titleE } = props;
  return (
    <div className="experience border-2 border-solid border-orange-500 text-white flex-col items-center justify-center w-auto text-2xl rounded-lg p-6 m-10 shadow-gray-500 lg:border-none">
      <TitleSections titleS={titleE} />
      <p className="mt-8">
        <span className="text-red-500 font font-semibold">{exp}</span> <br></br>
        {info}
      </p>
      <p className="text-end mt-8">{coming}</p>
    </div>
  );
}

export default Knowledge;
Knowledge.propTypes = {
  info: PropTypes.string,
  exp: PropTypes.string,
  coming: PropTypes.string,
  titleE: PropTypes.string,
};
