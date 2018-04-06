

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const withLayout = props => {
  return <div style={layoutStyle}>
    {props.children}
  </div>;
};
 export default withLayout