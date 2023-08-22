import TextAnimation from './animations/TextAnimation';
import PropTypes from 'prop-types';

const TitleSections = (props) => {
  const { titleS } = props;
  return (
    <div>
      <TextAnimation>
        <h1 className="text-center mb-4 pt-8 text-4xl text-white lg:text-5xl">
          {titleS}
        </h1>
      </TextAnimation>
    </div>
  );
};
export default TitleSections;
TitleSections.propTypes = {
  titleS: PropTypes.string,
};
