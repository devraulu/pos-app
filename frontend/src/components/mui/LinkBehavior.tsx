import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
} from '@reach/router';
import { forwardRef } from 'react';

const LinkBehavior = forwardRef((props, ref) => {
	// @ts-ignore
	const { href, ...other } = props;
	return (
		// @ts-ignore
		<RouterLink data-testid='custom-link' ref={ref} to={href} {...other} />
	);
});

export default LinkBehavior;

