import { RouteComponentProps, useParams } from '@reach/router';

import EditProduct from '../components/Products/EditProduct';
import React from 'react';

interface Props extends RouteComponentProps {}

export default function EditProductPage({}: Props) {
	const { id } = useParams();
	return <EditProduct id={id} />;
}
