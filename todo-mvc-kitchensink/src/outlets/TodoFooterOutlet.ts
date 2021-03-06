import { Outlet } from '@dojo/routing/Outlet';
import { MapParamsOptions } from '@dojo/routing/interfaces';

import TodoFooter from './../widgets/TodoFooter';

export default Outlet(TodoFooter, 'view', { mapParams: ({ queryParams, params }) => {
	return { view: params.view, filter: queryParams.filter };
}});
