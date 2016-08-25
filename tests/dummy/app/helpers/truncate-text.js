import { helper } from 'ember-helper';
import { isBlank } from 'ember-utils';

export function truncateText([text = '', characterLimit = 140]/* , hash */) {
  if (isBlank(text)) {
    return '';
  }

  return text.length > characterLimit ? `${text.substring(0, characterLimit - 3)}...` : text;
}

export default helper(truncateText);
