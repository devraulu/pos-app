import { Grid } from '@mui/material';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

export default function Home({}: Props) {
	return (
		<div className=''>
			<Grid container justifyContent='center' alignItems={'center'}>
				<Grid item xs={6}>
					<h1 className=''>
						Bienvenido al sistema <span className=''>POS</span>
					</h1>
				</Grid>
			</Grid>
		</div>
	);
}
