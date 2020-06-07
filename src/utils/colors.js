// TODO - review/cleanup up this file as the needs of the addon-background has changed
import tw from '../../tailwind.config';

function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

const colorMapper = (colors) => {
  const twColors = Object.keys(colors);

  return twColors.map((color) => {
    if (isObject(colors[color])) {
      const twColorVariations = Object.keys(colors[color]);
      const variations = twColorVariations.map((variation) => ({
        color: variation,
        bg: `bg-${color}-${variation}`,
        hex: colors[color][variation],
      }));

      return { name: color, variations };
    }
    return {
      name: color,
      variations: [{
        color,
        bg: `bg-${color}`,
        hex: colors[color],
      }],
    };
  });
};

const colorMapperFlat = (colors) => {
  const newColors = colors.flatMap(mainColor => {
    return mainColor.variations.map(variation => {
      return {
        name: variation.bg,
        value: variation.hex
      }
    });
  });

  return newColors;
};

export const colorMapFlat = () => colorMapperFlat(colorMapper(tw.theme.colors));

export const colorMap = () => colorMapper(tw.theme.colors);
