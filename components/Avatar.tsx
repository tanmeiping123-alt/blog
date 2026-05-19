'use client'

import Image from './Image'

const sizeConfig = {
  sm: {
    container: 'h-14 w-14',
    avatar: 'h-10 w-10',
    block: 'h-2.5 w-2.5',
  },
  md: {
    container: 'h-28 w-28',
    avatar: 'h-24 w-24',
    block: 'h-5 w-5',
  },
  lg: {
    container: 'h-52 w-52',
    avatar: 'h-48 w-48',
    block: 'h-8 w-8',
  },
}

const blockColors = [
  'bg-purple-500 dark:bg-purple-400',
  'bg-rose-400 dark:bg-rose-300',
  'bg-amber-400 dark:bg-amber-300',
]

interface AvatarProps {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Avatar = ({ src, alt = 'avatar', size = 'md', className = '' }: AvatarProps) => {
  const s = sizeConfig[size]

  return (
    <div className={`group relative ${s.container} mx-auto ${className}`}>
      {/* Rotating color blocks ring */}
      <div className="absolute inset-0 transition-transform duration-[600ms] ease-in-out group-hover:rotate-[360deg]">
        <div
          className={`absolute ${blockColors[0]} ${s.block} rounded-sm`}
          style={{ top: '5%', right: '15%' }}
        />
        <div
          className={`absolute ${blockColors[1]} ${s.block} rounded-sm`}
          style={{ bottom: '10%', left: '10%' }}
        />
        <div
          className={`absolute ${blockColors[2]} ${s.block} rounded-sm`}
          style={{ bottom: '5%', right: '5%' }}
        />
      </div>
      {/* Avatar image */}
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size === 'lg' ? 192 : size === 'md' ? 96 : 38}
          height={size === 'lg' ? 192 : size === 'md' ? 96 : 38}
          className={`${s.avatar} relative z-10 rounded-full object-cover`}
        />
      ) : (
        <div className={`${s.avatar} relative z-10 rounded-full bg-gray-200 dark:bg-gray-700`} />
      )}
    </div>
  )
}

export default Avatar
