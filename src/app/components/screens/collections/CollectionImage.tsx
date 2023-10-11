import { FC } from 'react'
import Image from "next/legacy/image"

import { ICollection } from './collections.interface'

export const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return <Image alt={title} src={image} layout="fill" draggable={false} />
}
