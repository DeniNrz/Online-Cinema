import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import { Meta } from '../../../../utils/meta/Meta'
import { AdminNavigation } from '../../../ui/admin-navigation/AdminNavigation'
import { Heading } from '../../../ui/heading/Heading'
import { SkeletonLoader } from '../../../ui/SkeletonLoader'
import Field from '../../../ui/form-elements/Field'
import { SlugField } from '../../../ui/form-elements/SlugField/SlugField'
import { generateSlug } from '../../../../utils/string/generateSlug'
import { Button } from '../../../ui/form-elements/Button'
import { UploadField } from '../../../ui/form-elements/UploadField/UploadField'

import formStyles from '../../../ui/form-elements/admin-form.module.scss'

export const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
							/>

							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')))
									}}
								/>
							</div>

							<Controller
								control={control}
								name="photo"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="actors"
										placeholder="Photo"
									/>
								)}
								rules={{
									required: 'Photo is required!',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}
