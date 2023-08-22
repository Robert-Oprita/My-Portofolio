import PropTypes from 'prop-types';
const InfoContact = (props) => {
  const { icon, title } = props;
  return (
    <div className="contentContact rounded-lg p-4 flex text-white">
      <div className="flex flex-row  ">
        {icon}
        <h1 className="xs:text-l font-semibold md:text-xl xl:text-2xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
export default InfoContact;
InfoContact.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
};
