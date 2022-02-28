import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { FixMeLater } from '../../models';

type Props = { hit: FixMeLater; handleDelete: () => void };

export default function ClientCard({ hit, handleDelete }: Props) {
	return (
		<Card>
			<Typography
				component='h4'
				textAlign='center'
				color='text.secondary'
				sx={{ py: 1 }}
				fontSize={14}>
				{hit?.objectID}
			</Typography>
			<CardMedia image={hit?.img} alt='product' component='img' height={100} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='h2'>
					{hit?.name}
				</Typography>
				<Typography variant='h6' component='h3' color='text-secondary'>
					{parseFloat(hit?.price).toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'center' }}>
				<Button size='large' href={`/${hit?.path}/edit`}>
					Edit
				</Button>
				<Button
					size='large'
					color='error'
					sx={{ ml: 1 }}
					onClick={handleDelete}>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
}
