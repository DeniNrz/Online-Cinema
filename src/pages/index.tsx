import { GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'

import { IHome } from '../app/components/screens/home/home.interface'
import { ISlide } from '../app/components/ui/slider/slider.interface'
import { getActorUrl, getMovieUrl } from '../app/config/url.config'
import { getGenresList } from '../app/utils/movie/getGenresList'
import { MovieService } from '../app/services/movie.service'
import { ActorService } from '../app/services/actor.service'
import { IGalleryItem } from '../app/components/ui/gallery/gallery.interface'

import '../app/assets/styles/globals.scss'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const { data: dataActors } = await ActorService.getAll()

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				slides,
				actors,
				trendingMovies,
			} as IHome,
			revalidate: 60,
		}
	} catch (error) {
		return {
			props: {
				slider: [],
				actors: [],
				trendingMovies: [],
			},
		}
	}
}

export default HomePage
