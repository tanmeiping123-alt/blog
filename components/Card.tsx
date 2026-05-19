import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } group flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200/60 transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg dark:border-gray-700/60 dark:hover:shadow-gray-800/50`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none flex-1 text-gray-500 dark:text-gray-400">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-auto text-base leading-6 font-medium transition-colors duration-200"
            aria-label={`Link to ${title}`}
          >
            了解更多 &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
