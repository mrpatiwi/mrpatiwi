import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Patricio López J."
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;