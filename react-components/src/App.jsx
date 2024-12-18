import './App.css'
import AppHeader from './components/AppHeader.jsx'
import AppCard from './components/AppCard.jsx'
import AppFooter from './components/AppFooter.jsx'
import posts from './data/posts.js'

function App() {

  return (
    <>
      <AppHeader />
      <div className="container">
        {posts.map((curPost) => {
          return (
            curPost.published && (<div className="post" key={curPost.id}>
              <AppCard id={curPost.id} title={curPost.title} content={curPost.content} image={curPost.image} tags={curPost.tags} />
            </div>
            )
          )

        })}
      </div>
      <AppFooter />
    </>
  )
}

export default App

