import { FC } from 'react'
import cn from 'classnames'

import { IButton } from './form.interface'

import styles from './form.module.scss'

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}
