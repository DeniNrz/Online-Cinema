import { FC } from 'react'
import cn from 'classnames'

import MaterialIcon from '../../MaterialIcon'

import styles from './SlideArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}

export const SlideArrow: FC<ISlideArrow> = ({ clickHandler, variant }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={cn(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
         aria-label={isLeft ? 'previous slide' : 'next slide'}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}
