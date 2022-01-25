# Pages
Pages should have their own directory within the `components` directory.
The page should have *one* "parent" component, named appropriately.

For example:
```
Home/Home.js:
    export class Home extends React.component {
        ...
    }
```

### Sub-pages / page sections
When sectioning a page, create single "parent" section components, and (when appropriate) create a subdirectory named after the section component and group all the section's components into that directory.
See [Sub-components](#Sub-components).

# Components
Components should go into the page directory they belong to.
For common components that show up on various pages with various contents, these belong in the `assets/utils` directory.
Only the `Navbar` component does not go into a page folder *or* the `assets/utils` folder, as it is both *unique* and *common* across all pages.

### Sub-components
It may be useful to organize the page folders with subdirectories containing groups of related components.
When grouping components, *try to* group them as a single component.
Like with pages, use a directory named the same as the "parent" component, and group all sub-components within that directory.
