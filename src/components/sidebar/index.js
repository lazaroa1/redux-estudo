import React from 'react';
import {connect} from 'react-redux'

// import { Container } from './styles';

function toggleLesson(lesson, module) {
  return{
    type: 'TOGGLE_LESSON',
    lesson,
    module,
  }
}

const sidebar = ({modules, dispatch}) => (
<aside>
  {modules.map(module => (
    <div key={module.id}>
      <strong>{module.title}</strong>
      <ul>
        {module.lessons.map(lessons => (
          <li key={lessons.id}>
            {lessons.title}
            <button onClick={() => dispatch(toggleLesson(module.lesson))}>Selecionar</button>
            </li>
        ))}
      </ul>
    </div>
  ))}
</aside>);

export default connect(state => ({ modules: state.modules }))(sidebar);
