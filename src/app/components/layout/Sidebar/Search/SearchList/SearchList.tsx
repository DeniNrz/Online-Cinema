import { FC } from 'react'
import Image from "next/legacy/image"
import Link from 'next/link'

import { IMovie } from '../../../../../shared/types/movie.types'
import { getMovieUrl } from '../../../../../config/url.config'
import styles from './SearchList.module.scss'

export const SearchList: FC<{ movies: IMovie }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie: any) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<div className={styles.searchMoviesList}>
							<Image
								src={movie.poster}
								width={50}
								height={50}
								alt={movie.title}
								objectFit="cover"
								objectPosition="top"
								draggable={false}
							/>
							<span>{movie.title}</span>
						</div>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}
