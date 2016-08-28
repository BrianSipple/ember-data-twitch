import StringListTransform from 'ember-data-twitch/transforms/string-list';


/**
 * Registers any items in addon/ that we aren't actually exporting in app/
 * with the application under test (since they wont be automatically registered
 * on the test appplication init)
 */
export default function registerAddonItems(application) {
  application.register('transform:string-list', StringListTransform);
}
