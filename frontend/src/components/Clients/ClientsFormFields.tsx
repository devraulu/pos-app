import FormikTextField from 'components/common/FormikTextField';

interface ClientsFormFieldsProps {}

const ClientsFormFields: React.FunctionComponent<
	ClientsFormFieldsProps
> = () => {
	return (
		<>
			{/* 
                name: string;
                createdAt?: number;
                updatedAt?: number;
                createdBy?: string;
                email: string;
                address: string;
                deleted: boolean;
                phone: string;
                cardCode: string;
                visits: number;
                points: number;
                id?: string;
                objectID?: string; 
            */}
			<FormikTextField name='name' label='Nombre' />
			<FormikTextField name='email' label='Email' type='email' />
			<FormikTextField name='phone' label='Teléfono' />
			<FormikTextField name='address' label='Dirección' />
			<FormikTextField name='cardCode' label='Numero de tarjeta de membresía' />
			<FormikTextField name='points' label='Puntos' />
			<FormikTextField name='visits' label='Visitas' />
		</>
	);
};

export default ClientsFormFields;

