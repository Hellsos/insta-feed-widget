# Instagram User Media Feed Widget

Instagram User Media Feed Widget using [React.js](https://reactjs.org).

## Usage

Import [library](https://cdn.jsdelivr.net/gh/Hellsos/insta-feed-widget/dist/bundle.min.js) for example from [JSDelivr](https://www.jsdelivr.com/) CDN.

`<script async src="https://cdn.jsdelivr.net/gh/Hellsos/insta-feed-widget/dist/bundle.min.js"></script>`

Then call `InstaFeedWidget` function in window.

### Options

- `api: string` : API Endpoint providing JSON Instagram User Media. Or using existing Instagram User Media API project [Link](https://github.com/Hellsos/deno-insta-feed).
- `target: HTMLELement`: HTML Element which will be widget rendered into.
- `limit?: number`: Amount of Media Items in view. Default is `9`.

### Example Execution

```
InstaFeedWidget({
    api : 'https://YOUR_DOMAIN/api/ig/user/YOUR_IG_USER_ID',
    target : document.getElementById( 'render-widget' )
} );
```
