# Storybook, Tailwind, Vue CLI Sample App 

## Project setup
Probably steer clear of PNPM at this time
```
npm install
```

### Compile Tailwind
If at anytime you need to update the CSS because of tailwind.config changes, run
```
npm run tailwind:build
```
Note that if your Storybook server is running, you will not need to reload it.

### Compile Tailwind & Purge unused CSS classes
```
npm run tailwind:build:purge
```

### Compiles, serves and hot-reloads Storybook for realtime development
```
npm run storybook:serve
```
