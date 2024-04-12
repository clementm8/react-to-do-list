# Optimizing SVG

## Sourcing SVG Icons & Artwork

Best place to go for icons for react projects is [ReactIcons](https://react-icons.github.io/react-icons/). Just follow the install instructions on the home page then click on an icon and copy that code into your react component. For more informaton on [how to style react icons](https://github.com/react-icons/react-icons) go their github repo. (link provided)

## Converting Bitmaps To SVG

There are lots of online tools for converting bitmaps to svgs. However there are some caviats. Try to keep the image your tracing simple. Best to use two color shape logos and use a tool like [Adobe Express](https://new.express.adobe.com/tools/convert-to-svg) to convert image to a vector art. It's not perfect but it works.

## Using SVGO Optimizer

SVG files, especially those exported from various editors, usually contain a lot of redundant and useless information. This can include editor metadata, comments, hidden elements, default or non-optimal values and other stuff that can be safely removed or converted without affecting the SVG rendering result.

<br>

**Optimizing A Single SVG File**

```
svgo ./public/svg/logo.svg -o ./public/svg/logo.svg
```

<br/>

**Otimizing A Folder Of SVG's**

```
svgo -f ./public/svg -o ./public/svgo
```

<br/>

## Using SVGR

SVGR is a tool you can use to convert SVGs into React components.  
**Installing SVGR**  
You can install SVGR as a developer dependancy.

```
npm i -D @svgr/cli
```

<br/>
<br/>

**Converting A Single SVG To A Component**

```
npx @svgr/cli ./public/svg/vercel.svg  >  ./public/svg/Vercel.jsx
```

<br/>
<br/>

**Converting Directory of SVGs to React Components**  
 In the example below the svg artwork has been optimized using svgo then we can
use svgr to create a react component.

```
npx @svgr/cli --out-dir  ./public/svgo  -- ./public/svgr
```
