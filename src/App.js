import './App.css';

import { Footer } from './components/footer';
import Body from './components/body';
import { Header } from './components/header';

function App() {
  return(
  <div className='view'>
  <Header/>
  <Body/>
  <Footer/>
</div>
  )
}

export default App;
