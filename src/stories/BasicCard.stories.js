const templateDecorator = () => ({
  template: '<div class="p-3 w-2/3 m-auto"><story /></div>',
});


export default {
  decorators: [
    templateDecorator,
  ],
  title: 'Basic Card',
};

export const Card = () => ({
  template: `
<div class="card">
  <div class="card-header">This is a card</div>
  <div class="card-body">
    <p>Elementum finibus a rhoncus ex sodales habitant maximus quam magna parturient convallis urna efficitur lectus maecenas nibh scelerisque ipsum justo.</p>
  </div>
</div>
`
});
