import { FC } from 'react'
import Link from 'next/link'

import { IMovieList } from './movie-list.interface'
import { MovieItem } from './MovieItem'

import styles from './MovieList.module.scss'

export const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.slice(0, 3).map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}

			<Link href={link}>
				<div className={styles.button}>See more</div>
			</Link>
		</div>
	)
}
