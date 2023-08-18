import { FC } from 'react'
import Link from 'next/link'

import { getMovieUrl } from '../../../../config/url.config'

import styles from './AuthPlaceholder.module.scss'

export const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
			<div className={styles.btn}>Sing in</div>
		</Link>
	)
}
