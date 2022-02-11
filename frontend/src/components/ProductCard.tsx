import React from 'react';
import { FixMeLater } from '../models';
type Props = { hit: FixMeLater };

export default function ProductCard({ hit }: Props) {
	return (
		<div className='bg-gray-200 flex flex-col justify-center p-3 rounded-lg shadow-lg '>
			<img src={hit?.img} alt='' className='rounded-md' />
			<div className='mt-2'>
				<h2 className='text-xl font-bold'>{hit?.name} </h2>
				<h3 className='text-lg '>
					{hit?.price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</h3>
			</div>
		</div>
	);
}
