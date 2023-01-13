import './Options.css';

const Options = ({ children, width = '100%' }) => {
  return (
    <section className="Options" style={{width}}>
      {children}
    </section>
  );
};

export default Options;