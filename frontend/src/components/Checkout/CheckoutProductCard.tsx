import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { Product } from 'models';

type Props = { hit: unknown };

export default function CheckoutProductCard({ hit }: Props) {
	const { category, img, name, price } = hit as Product;
	return (
		<Card>
			<Typography
				component='h4'
				textAlign='center'
				color='text.secondary'
				sx={{ py: 1 }}
				fontSize={14}>
				{category.toUpperCase()}
			</Typography>
			<CardMedia image={img} alt='product' component='img' height={100} />
			<CardContent>
				<Typography
					gutterBottom
					variant='h6'
					component='h2'
					className='text-truncate'>
					{name}
				</Typography>
				<Typography variant='body1' component='h3' color='text-secondary'>
					{Number(price).toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</Typography>
			</CardContent>
		</Card>
	);
}
