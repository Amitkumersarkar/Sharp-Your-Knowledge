import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './Header/Header'

function App() {


  return (
    <>
      <div>
        <Header></Header>
        <div>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
