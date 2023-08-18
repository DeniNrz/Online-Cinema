import { FC } from 'react'
import parse from 'html-react-parser'
import cn from 'classnames'

export const Description: FC<{ text: string; className?: string }> = ({
	text,
	className = '',
}) => {
	return (
		<div
			className={cn('text-lg font-light text-white text-opacity-60', className)}
		>
			{parse(text)}
		</div>
	)
}
