/**
 *
 * Asynchronously loads the component for ComAndPureCom
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
