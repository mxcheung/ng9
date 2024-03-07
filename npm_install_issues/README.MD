

```
registry=https://registry.npmjs.org/

@yourorg:registry=https://npm.pkg.github.com/yourorg

```

This configuration tells npm to use the default npm registry (https://registry.npmjs.org/) for packages not prefixed with @yourorg, 

and it uses https://npm.pkg.github.com/yourorg for packages prefixed with @yourorg.

You can add more repositories following the same pattern.
