import React from 'react';
import ReactCSSTransitionsGroup from 'react-addons-css-transition-group';

class ReferralEditModal extends React.Component {
  render() {
      if(this.props.isOpen) {
        return(
          <ReactCSSTransitionsGroup transitionName={this.props.transitionName}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <form>
                <input type="text" value="{title}" />
              </form>
              <button onClick={this.closeModal}>Save</button>
          </ReactCSSTransitionsGroup>
        );
      } else {
        return <ReactCSSTransitionsGroup transitionName={this.props.transitionName} />;
      }
    }
  }

export default ReferralEditModal
