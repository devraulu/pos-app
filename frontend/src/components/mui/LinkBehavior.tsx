import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from '@reach/router';
import { forwardRef } from 'react';

const LinkBehavior = forwardRef((props, ref) => {
	const { href, ...other } = props;
	return (
		<RouterLink data-testid='custom-link' ref={ref} to={href} {...other} />
	);
});

export default LinkBehavior;
