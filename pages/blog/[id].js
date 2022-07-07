import {useRouter} from 'next/router'

const EntradaBlog = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
        Desde entrada blog 
    </div>
  )
}

export default EntradaBlog