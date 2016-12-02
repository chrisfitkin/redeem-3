import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

const AnimateFadeUp = ({children, key}) => (

    <ReactCSSTransitionGroup
        transitionName={{
            appear: css(animation.enter),
            appearActive: css(animation.enterActive),
            enter: css(animation.enter),
            enterActive: css(animation.enterActive),
            leave: css(animation.leave),
            leaveActive: css(animation.leaveActive)
        }}
        transitionAppearTimeout={750}
        transitionEnterTimeout={750}
        transitionLeaveTimeout={750}
        transitionAppear={true}
        key={key}>
            {children}
    </ReactCSSTransitionGroup>
)

const animation = StyleSheet.create({
  appear: {
    marginTop: 10,
    opacity: 0.01
  },
  appearActive: {
    marginTop: 0,
    opacity: 1,
    transition: 'opacity 500ms ease-in, margin-top 500ms ease-out'
  },
  enter: {
    marginTop: 10,
    opacity: 0.01
  },
  enterActive: {
    // marginTop: 20,
    // transition: 'margin-top 500ms ease-in'
  },
  leave: {
    // marginTop: 40,
  },
  leaveActive: {
    // marginTop: 50,
    // transition: 'margin-top 500ms ease-in'
  }
});

export default AnimateFadeUp