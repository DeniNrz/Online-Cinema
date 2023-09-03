import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { IMovie } from '../../../shared/types/movie.types'
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'
import { getMovieUrl } from '../../../config/url.config'
import { useAuth } from '../../../hooks/useAuth'

import styles from './Favorites.module.scss'

export const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
   const { user } = useAuth()

	return (
		<div className={styles.itemWrapper}>
			{user && <FavoriteButton movieId={movie._id || ''} />}
			<Link href={movie.slug ? getMovieUrl(movie.slug) : '#'}>
				<div className={styles.item}>
					<Image
						alt={movie.title || ''}
						src={movie.bigPoster || ''}
						layout="fill"
						draggable={false}
						priority
					/>

               <div className={styles.title}>{movie.title}</div>
				</div>
			</Link>
		</div>
	)
}
