import { FC } from 'react'

import { IHome } from './home.interface'
import { Meta } from '../../../utils/meta/Meta'
import { Heading } from '../../ui/heading/Heading'
import Slider from '../../ui/slider/Slider'
import { SubHeading } from '../../ui/heading/SubHeading'
import Gallery from '../../ui/gallery/Gallery'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides && slides.length > 0 && <Slider slides={slides} />}

			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies && trendingMovies.length > 0 && (
					<Gallery items={trendingMovies} />
				)}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{actors && actors.length > 0 && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
