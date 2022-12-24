import { Header } from './components/Header/Header'
import { SideBar } from './components/SideBar/SideBar'
import { Post } from './components/Post/Post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/JJonaw.png",
          name: "Jonathan Carvallho Bispo",
          role: "Web developer",
      },
      content: [ 
          { type: 'paragraph', content: 'Fala galeraa 👋'},
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
          { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
  },
  
]

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}