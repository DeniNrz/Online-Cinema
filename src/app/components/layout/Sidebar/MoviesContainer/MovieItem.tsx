import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { IMovie } from '../../../../shared/types/movie.types'
import { getGenreUrl, getMovieUrl } from '../../../../config/url.config'
import { getGenresListEach } from '../../../../utils/movie/getGenresList'
import MaterialIcon from '../../../ui/MaterialIcon'

import styles from './MovieList.module.scss'

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(String(movie.slug))}>
				<div className={styles.itemImage}>
					<Image
						width={65}
						height={97}
						src={movie.poster || ''}
						alt={movie.title || ''}
						draggable={false}
						priority
					/>
				</div>
			</Link>

			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
               
               {movie.genres !== undefined && movie.genres.map((genre, idx) => (
                  <Link key={genre._id} href={getGenreUrl(genre.slug)}>
                     <div>
                        {movie.genres && getGenresListEach(idx, movie.genres.length, genre.name)}
                     </div>
                  </Link>
               ))}
					</div>
				</div>

            <div className={styles.rating}>
               <MaterialIcon name='MdStarRate' />
               <span>{(Number(movie.rating)).toFixed(1)}</span>
            </div>
			</div>
		</div>
	)
}
