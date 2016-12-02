import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

// TODO: Get enter and leave states to function

const AnimateFadeIn = ({children, key}) => (

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
    opacity: 0.01
  },
  appearActive: {
    opacity: 1,
    transition: 'opacity 500ms ease-in'
  },
  enter: {
    opacity: 0.01
  },
  enterActive: {
    opacity: 1,
    transition: 'opacity 500ms ease-in'
  },
  leave: {
    opacity: 1
  },
  leaveActive: {
    opacity: 0.01,
    transition: 'opacity 300ms ease-in'
  }
});

export default AnimateFadeIn