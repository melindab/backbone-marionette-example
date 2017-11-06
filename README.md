# Example Backbone/Marionette App with Browserify

This example demonstrates how to build an application using Backbone, Marionette, and Browserify.

## Table of Contents

1. [Requirements](#requirements)
1. [Installing Dependencies](#installing-dependencies)

## Requirements

- Backbone 1.3.3
- Marionette 3.4.4
- Handlebars 4.0.11
- Materialize 0.100.2
- hbsfy 2.8.1

### Installing Dependencies

```npm install backbone --save
npm install backbone.marionette --save
npm install materialize-css --save
npm install handlebars --save
npm install hbsfy --save-dev
npm install -g browserfiy
```
### Mock Data
This example code uses mockable.io to create a mock service.
The format of the mock data should be:

```{
    "content": {
        "page-1": "<h2>Page 1 Heading</h2><div>This is page 1 content.</div>",
        "page-2": "<h2>Page 2 Heading</h2><div>This is page 2 content.</div>",
        "page-3": "<h2>Page 3 Heading</h2><div>This is page 3 content.</div>"
    }
}
```
