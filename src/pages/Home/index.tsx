import { useEffect } from 'react'

function HomePage() {
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/users')
      const data = await response.json()
      console.log({ data })
    }

    fetchUsers()
  }, [])

  return <div>HomePage</div>
}

export default HomePage
