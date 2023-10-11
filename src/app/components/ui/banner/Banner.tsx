import { FC } from 'react'
import Image from "next/legacy/image"

import styles from './Banner.module.scss'

interface IBanner {
	image: string
	Detail?: FC | null
}

export const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={image}
				draggable={false}
				layout="fill"
				className="image-like-bg object-top"
				unoptimized
				priority
            sizes='400'
				alt=""
			/>
         {Detail && <Detail />}
		</div>
	)
}
