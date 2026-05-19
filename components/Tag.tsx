import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
  colorClass?: string
}

const Tag = ({ text, colorClass }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className={`mr-3 text-sm font-medium uppercase transition-all duration-200 hover:opacity-80 ${
        colorClass || 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
      }`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
