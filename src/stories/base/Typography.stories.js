export default {
  title: 'Base/Typography',
  argTypes: {
    text: { control: 'text', name: 'Text' },
  },
  args: {
    text: 'Taciti risus augue ligula orci tempor enim dui est',
  },
};

export const Headings = (args) => ({
  props: {
    text: {
      default: args.text
    },
  },

  template: `
<div>
  <h1>H1 &mdash; {{ text }}</h1>
  <h2>H2 &mdash; {{ text }}</h2>
  <h3>H3 &mdash; {{ text }}</h3>
  <h4>H4 &mdash; {{ text }}</h4>
  <h5>H5 &mdash; {{ text }}</h5>
  <h6>H6 &mdash; {{ text }}</h6>
  <p>Paragraph &mdash; {{ text}} and this is <a href="#">a link</a>.</p>
</div>
`
});

export const Weights = (args) => ({
  props: {
    text: {
      default: args.text
    },
  },
  template: `
<div>
  <div class="mb-2"><code>No Utility Class</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-thin"><code>.font-thin</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-extralight"><code>.font-extralight</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-light"><code>.font-light</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-normal"><code>.font-normal</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-medium"><code>.font-medium</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-semibold"><code>.font-semibold</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-bold"><code>.font-bold</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-extrabold"><code>.font-extrabold</code> &mdash; {{ text }}</div>
  <div class="mb-2 font-black"><code>.font-black</code> &mdash; {{ text }}</div>
</div>
  `
});
