import Head from 'next/head'

import styles from '@/pages/index.module.css'
import ToDoList from '@/components/to-do-list'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NovaFori test - To-do app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ToDoList />
       </main>
    </div>
  )
}
