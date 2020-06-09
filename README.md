# Storybook, Tailwind, Vue CLI Sample App 

## Project setup
Probably steer clear of PNPM at this time
```
npm install
```

### Compile Tailwind
Anytime you need to update the CSS because of tailwind.config changes, rebuild it. Note that if your Storybook server is running, you will not need to reload it. Don't be alarmed if your CSS file is several megabytes, that's OK... embrace it.
```
npm run tailwind:build
```


### Compile Tailwind & Purge unused CSS classes
Once you are ready to serve optimized CSS, PurgeCSS will take the huge CSS file and strip it down to kilobytes.
```
npm run tailwind:build:purge
```

### Compiles, serves and hot-reloads Storybook for realtime development
```
npm run storybook:serve
```
