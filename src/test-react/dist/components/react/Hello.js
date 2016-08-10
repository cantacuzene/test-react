"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
const React = require("react");
class Hello extends React.Component {
    render() {
        return React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!");
    }
}
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map