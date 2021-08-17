import PropTypes from "prop-types";
import "antd/dist/antd";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
