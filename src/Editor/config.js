import Radius from '../Radius';
import Padding from '../Padding';
import Background from '../Background';
import Shadow from '../Shadow';
import AspectRatio from '../AspectRatio';
import Share from '../Share/Share';

const options = [
  {
    id: 'radius',
    title: 'Radius',
    icon: 'rounded-corner',
  },
  {
    id: 'shadow',
    title: 'Shadow',
    icon: 'box-shadow',
  },
  {
    id: 'padding',
    title: 'Padding',
    icon: 'border-all-variant',
  },
  {
    id: 'background',
    title: 'Background',
    icon: 'image-multiple',
  },
  {
    id: 'ratio',
    title: 'Aspect Ratio',
    icon: 'aspect-ratio',
  },
  {
    id: 'share',
    title: 'Share',
    icon: 'share-variant-outline',
  },
];

const Editors = {
  radius: Radius,
  padding: Padding,
  shadow: Shadow,
  background: Background,
  ratio: AspectRatio,
  share: Share,
};

export {Editors, options};
