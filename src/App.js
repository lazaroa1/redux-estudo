import React, {Component} from 'react'
import {Provider} from 'react-redux'
import Sidebar from './components/sidebar'
import Video from './components/videos'
import store from './store'

class App extends Component {
  render(){
  return (
    <div className="App">
      <Provider store={store}>
      <Video />
      <Sidebar />
      </Provider>
    </div>
  )
}
}

export default App;
