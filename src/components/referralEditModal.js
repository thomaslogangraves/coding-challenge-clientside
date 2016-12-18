import React from 'react';
import ReactCSSTransitionsGroup from 'React.addons.CSSTransitionGroup'

export class referralEditModal extends React.Component {
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
