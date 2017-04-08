import Masonry from 'masonry-layout';
import { pageTitle } from './lib/utility';

new Masonry('body', {
  itemSelector: '.item',
  columnWidth: 180,
  gutter: 4
});
