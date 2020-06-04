import { text } from '@storybook/addon-knobs';

const templateDecorator = () => ({
  data: () => ({
    wrapperWidthClasses: 'text-4xl',
  }),
  template: '<div class="p-3"><story /></div>',
});


export default {
  decorators: [
    templateDecorator,
  ],
  title: 'Tables',
};

export const Tables = () => ({
  template: `
<table>
  <thead>
    <tr>
      <th>Movie</th>
      <th>Written By</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Creature from the Black Lagoon</td>
      <td>Maurice Zimm</td>
      <td>February 12, 1954</td>
    </tr>
    <tr>
      <td>The Ghost of Frankenstein</td>
      <td>George Waggner</td>
      <td>March 13, 1942</td>
    </tr>
    <tr>
      <td>The Mummy's Curse</td>
      <td>Oliver Drake</td>
      <td>December 22, 1944</td>
    </tr>
    <tr>
      <td>Frankenstein Meets the Wolf Man</td>
      <td>George Waggner</td>
      <td>March 5, 1943</td>
    </tr>
  </tbody>
</table>
`
});
