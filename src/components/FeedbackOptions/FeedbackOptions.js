import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
