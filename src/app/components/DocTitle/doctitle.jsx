import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DocTitle extends Component {
    constructor(props) {
        super(props);
        this.titleEl = document.getElementsByTagName("title")[0];
    }

    render() {
        let fullTitle;
        if(this.props.pageTitle) {
            fullTitle = this.props.siteTitle + " | " + this.props.pageTitle;
        } else {
            fullTitle = this.props.siteTitle;
        }

        return ReactDOM.createPortal(
            fullTitle || "",
            this.titleEl
        );
    }
}
DocTitle.defaultProps = {
    pageTitle: null,
    siteTitle: "BlogHub",
};

export default DocTitle;