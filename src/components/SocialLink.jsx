import PropTypes from 'prop-types';
const SocialLink = (props) => {
  const { icon } = props;
  return <div className=" mt-4 mr-4 ">{icon}</div>;
};
export default SocialLink;

SocialLink.propTypes = {
  icon: PropTypes.object,
};
