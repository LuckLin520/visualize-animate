## Visual range animation plug-in used in vue, based on animate.css

🌟👉：[https://github.com/LuckLin520/visualize-animate](https://github.com/LuckLin520/visualize-animate)

# Example

### Install in vue

```typescript
import { createApp } from "vue";
import visualizeAnimate from "visualize-animate";
const app = createApp(App);
// ...Others
app.use(visualizeAnimate);
app.mount("#app");
```

### Using in page

```html
<template>
  <div v-animate="{ ani: 'fadeInRightBig' }" class="title">
    <p>Hello, Welcome to visualize-animate!</p>
  </div>
</template>
<script setup lang="ts">
  import { useVisualizeAnimate } from "visualize-animate";
  useVisualizeAnimate();
</script>
```

# Installing

Using npm:

```bash
$ npm install visualize-animate
```

Using bower:

```bash
$ bower install visualize-animate
```

Using yarn:

```bash
$ yarn add visualize-animate
```

Using pnpm:

```bash
$ pnpm add visualize-animate
```

# Types

```typescript
export declare type VisualizeAnimateValue = {
  ani: string;
  duration?: number;
  hook?: string;
  delay?: number;
};
declare const _default: {
  isInstalled: boolean;
  install(app: App): void;
};
export default _default;
export declare const useVisualizeAnimate: () => void;
```
