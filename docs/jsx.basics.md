# The Rules of JSX

1. Return a single root element
   To return multiple elements from a component, wrap them with a single parent tag. You can wrap markup in an extra <div> or you can write <> and </> instead. This is called a fragment which lets you group things without having to add an element just to follow the rule.

2. Close all tags.
   JSX requires tags to be explicitly closed: self-closing tags like <img> must become  
    <img />

3. camelCase all most of the things!
   JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class. This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property:

   ` aria-* and data-* attributes are written as in HTML with dashes.`

```html
<img width="100" height="100" src="https://api.dicebear.com/7.x/initials/svg?seed=JF" alt="avatar" class="border" />
```

## NOTE

JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

## Converting HTML to JSX

```html
<h1>User Name</h1>
<img width="100" height="100" src="https://api.dicebear.com/7.x/initials/svg?seed=JF" alt="avatar" class="border" />
<ul>
	<li>Invent new traffic lights</li>
	<li>Rehearse a movie scene</li>
	<li>Add new colors to the spectrum</li>
</ul>
```

Summary
Now you know why JSX exists and how to use it in components:

React components group rendering logic together with markup because they are related.
JSX is similar to HTML, with a few differences. You can use a converter if you need to.
Error messages will often point you in the right direction to fixing your markup.
