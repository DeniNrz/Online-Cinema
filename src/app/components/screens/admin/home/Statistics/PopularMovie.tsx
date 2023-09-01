import { FC } from 'react'
import { useQuery } from 'react-query'
import Link from 'next/link'
import cn from 'classnames'
import Image from 'next/image'

import { MovieService } from '../../../../../services/movie.service'
import { IMovie } from '../../../../../shared/types/movie.types'
import { SubHeading } from '../../../../ui/heading/SubHeading'
import { SkeletonLoader } from '../../../../ui/SkeletonLoader'
import { getMovieUrl } from '../../../../../config/url.config'

import styles from '../Admin.module.scss'

export const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most popular movie in admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)

	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug || '')}>
							<div>
								<Image
									width={285}
									height={176}
									src={movie.bigPoster || ''}
									alt={movie.title || ''}
									className={styles.image}
									unoptimized
								/>
							</div>
						</Link>
					</>
				)
			)}
		</div>
	)
}
