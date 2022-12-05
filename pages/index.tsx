import Head from 'next/head'

import ToDoList from '@/components/to-do-list'

export default function Home() {
  return (
    <div>
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
