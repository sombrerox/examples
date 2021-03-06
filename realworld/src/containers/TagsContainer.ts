import { Store } from '@dojo/stores/Store';
import { Tags, TagsProperties } from './../widgets/Tags';
import { fetchFeedProcess } from '../processes/feedProcesses';
import { State } from '../interfaces';
import StoreContainer from './StoreContainer';

function getProperties(store: Store<State>): TagsProperties {
	const { get, path } = store;
	return {
		tags: get(path('tags')) || [],
		fetchFeed: fetchFeedProcess(store)
	};
}

export default StoreContainer(Tags, 'state', { paths: [[ 'tags' ]], getProperties });
