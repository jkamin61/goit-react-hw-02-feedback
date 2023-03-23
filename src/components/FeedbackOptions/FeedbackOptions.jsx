const FeedbackOptions = ({ options }) => (
  <div className={'feedback__container'}>
    <button onClick={options.good}>good</button>
    <button onClick={options.neutral}>neutral</button>
    <button onClick={options.bad}>bad</button>
  </div>
);
export default FeedbackOptions
