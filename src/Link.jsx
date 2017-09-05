import React from 'react';
import { PropTypes } from 'prop-types';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};
class Link extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = { className: STATUS.NORMAL };
  }
  handleMouseEnter() {
    this.setState({ className: STATUS.HOVERED });
  }

  handleMouseLeave() {
    this.setState({ className: STATUS.NORMAL });
  }
  render() {
    const { children, page } = this.props;
    const { className } = this.state;
    return (
      <a
        className={className}
        href={page || '#'}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </a>
    );
  }
}
Link.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
};
Link.defaultProps = {
  page: null,
};
export default Link;
