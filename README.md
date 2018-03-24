# React Window Portal

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/mscolnick/react-window-portal.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/mscolnick/react-window-portal.svg)](https://travis-ci.org/mscolnick/react-window-portal)
[![Coveralls](https://img.shields.io/coveralls/mscolnick/react-window-portal.svg)](https://coveralls.io/github/mscolnick/react-window-portal)
[![Dev Dependencies](https://david-dm.org/mscolnick/react-window-portal/dev-status.svg)](https://david-dm.org/mscolnick/react-window-portal?type=dev)

React Portal to a new window.

Inspired by [Using a React 16 Portal to do something cool](https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202).

## Example

```tsx
import { WindowPortal } from "react-window-portal";

export class MyComponent extends React.PureComponent<{}, {isOpen: boolean}> {
    public state = {
        isOpen: false;
    };

    public render() {
        return (
            <div>
              <button onClick={() => this.setState({isOpen: true})}>open window</button>
              {this.state.isOpen && (
                  <WindowPortal width={500} height={500}>
                      <button onClick={() => this.setState({isOpen: false})}>close window</button>
                  </WindowPortal>
                  )
              }
            </div>
        );
    }
}
```

## Developing

```bash
git clone https://github.com/mscolnick/react-window-portal.git
yarn
```

### NPM scripts

- `yarn test`: Run test suite
- `yarn start`: Run `yarn run build` in watch mode
- `yarn test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `yarn test:prod`: Run linting and generate coverage
- `yarn build`: Generate bundles and typings, create docs
- `yarn lint`: Lints code
- `yarn commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)
