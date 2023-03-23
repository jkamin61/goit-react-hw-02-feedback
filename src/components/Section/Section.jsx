import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);

export default Section

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}
