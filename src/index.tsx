import * as ReactDOM from "react-dom";
import * as React from "react";

import { InstagramWidget } from "./widgets/instagram.widget";

type InstaFeedWidget = {
	api : string;
	target : HTMLElement;
}

( window as any )[ "InstaFeedWidget" ] = ( { api, target } : InstaFeedWidget ) => {
	if ( api === null ) return console.warn( "Missing Api Endpoint" );
	if ( target === null ) return console.warn( "Missing Target Element" );

	ReactDOM.render(
		<InstagramWidget api={ api }
						 target={ target } />,
		document.getElementById( "boot-me" )
	);
};
