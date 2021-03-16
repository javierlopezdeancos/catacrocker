import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Bird() {
  const router = useRouter()
  const { data: bird, error } = useSwr(
    router.query.id ? `/api/bird/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load bird</div>
  if (!bird) return <div>Loading...</div>

  return <div>{bird.name}</div>
}
