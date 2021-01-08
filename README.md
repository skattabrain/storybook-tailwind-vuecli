# Vue, Storybook, Tailwind Starter Template

## Project setup
Probably steer clear of PNPM at this time, developed on Node 14.5.x
```
npm install
```

### Build app in production mode
```
npm run build
```

### Serve and hot-reload app in development mode
```
npm run storybook:serve
```

### Compile Tailwind CSS
Anytime you need to update the CSS because of tailwind.config changes, rebuild it. Note that if your Storybook server is running, you will not need to reload it. Don't be alarmed if your CSS file is several megabytes, that's OK... embrace it.
```
npm run tailwind:build
```

### Compile Tailwind & Purge unused CSS classes
Once you are ready to serve optimized CSS, PurgeCSS will take the huge CSS file and strip it down to kilobytes.
```
npm run tailwind:build:purge
```

### Serves and hot-reloads Storybook for realtime development
```
npm run storybook:serve
```

### Build Storybook for production
```
npm run storybook:build
```
