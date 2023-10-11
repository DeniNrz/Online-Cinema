import Image from "next/legacy/image"
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '../../../assets/images/logo.svg'

export const Logo: FC = () => {
	return (
		<Link href="/" passHref>
			<div className="px-layout mb-10 block">
				<Image
					src={logoImage}
					alt="Online cinema"
					width={247}
					height={34}
					draggable={false}
				/>
			</div>
		</Link>
	)
}
