import React from 'react';
import {connect} from 'react-redux'

const videos = (actionModule, activeLesson) => (
  <div>
    <strong>Modulo {actionModule.title}</strong>
    <span>Aula {activeLesson.title}</span>
  </div>
);

export default connect(state =>({
  actionModule: state.activeModule,
  activeLesson: state.activeLesson,
}))(videos)
