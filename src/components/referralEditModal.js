import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ReferralEditModal extends React.Component {
  render() {
      if(this.props.isOpen) {
        return(
          <ReactCSSTransitionsGroup transitionName={this.props.transitionName}>
            <div className="modal">
              {this.props.children}
            </div>
          </ReactCSSTransitionsGroup>
        );
      } else {
        return <ReactCSSTransitionsGroup transitionName={this.props.transitionName} />;
      }
    }
  }

export default ReferralEditModal
