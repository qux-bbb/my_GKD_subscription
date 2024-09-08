import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'qux-bbb Subscription',
  version: 0,
  author: 'qux-bbb',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/qux-bbb/my_GKD_subscription/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
