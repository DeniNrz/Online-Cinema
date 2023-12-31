import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from "next/legacy/image"

import { ISlide } from './slider.interface'

import styles from './Slider.module.scss'

interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

export const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<Image
					layout="fill"
					className={styles.image}
					src={slide.bigPoster}
					alt={slide.title || ''}
					draggable={false}
					unoptimized
					priority
				/>
			)}

			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}
