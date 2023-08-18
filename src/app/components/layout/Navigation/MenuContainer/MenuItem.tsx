import { FC } from 'react'
import { IMenuItem } from './menu.interface'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'next/link'

import MaterialIcon from '../../../ui/MaterialIcon'

import styles from './Menu.module.scss'


export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<div className={styles.liMenu}>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</div>
			</Link>
		</li>
	)
}
