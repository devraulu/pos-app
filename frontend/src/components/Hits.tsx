import { Hit as AlgoliaHit } from '@algolia/client-search';
import { useHits, UseHitsProps } from 'react-instantsearch-hooks';

export type HitsProps<THit> = React.ComponentProps<'div'> &
	UseHitsProps & {
		hitComponent: (props: { hit: THit }) => JSX.Element;
	};

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
	hitComponent: Hit,
}: HitsProps<THit>) {
	const { hits } = useHits();
	console.log('Hits', JSON.stringify(hits));
	return (
		<div className='mt-4 grid grid-cols-6 gap-4'>
			{hits.length > 0 &&
				hits.map((hit) => (
					<div key={hit.objectID} className='ais-Hits-item'>
						<Hit hit={hit as unknown as THit} />
					</div>
				))}
		</div>
	);
}
