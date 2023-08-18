import { FC } from 'react'

import { Meta } from '../../../utils/meta/Meta'
import { Heading } from '../../ui/heading/Heading'
import { useFavorites } from './useFavorites'
import { SkeletonLoader } from '../../ui/SkeletonLoader'
import { FavoriteItem } from './FavoriteItem'

import styles from './Favorites.module.scss'

export const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	return (
		<Meta title="Favorites">
			<Heading title="Favorites" />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	)
}
