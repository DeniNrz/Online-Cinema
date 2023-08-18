import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

import { INavItem } from './admin-navigation.interface'

import styles from './AdminNavigation.module.scss'

export const AdminNavItem: FC<{ item: INavItem }> = ({
	item: { link, title },
}) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={link}>
				<div className={cn({ [styles.active]: asPath === link })}>{title}</div>
			</Link>
		</li>
	)
}
