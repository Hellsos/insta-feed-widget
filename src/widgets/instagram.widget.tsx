import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ErrorComponent } from "../core/components/error/error.component";
import { FeedComponent } from "../core/components/feed/feed.component";

type FeedItem = {
	id : string;
	media_type : string;
	thumbnail_url : null | string;
	media_url : string;
	permalink : string;
	timestamp : string;
}

interface IProps {
	api : string;
	target : HTMLElement;
	limit? : number | null;
}

const InstagramWidget = ( props : IProps ) => {
	const {
		api,
		target,
		limit
	} = props;

	const [ error, setError ] = useState<null | Error>( null );
	const [ feedList, setFeedList ] = useState<Array<FeedItem>>( [] );

	useEffect( () => {
		console.debug( InstagramWidget.name, { api, target, limit } );

		( async () => {
			try {
				const response = await fetch( api );
				if ( response.ok === false ) {
					throw new Error( response.statusText );
				}
				const json : Array<FeedItem> = await response.json();
				setFeedList( json
					.sort( ( ( a, b ) => new Date( b.timestamp ).getTime() - new Date( a.timestamp ).getTime() ) )
					.slice( 0, limit ?? 9 ) );
			} catch ( e ) {
				setError( e );
				console.warn( e );
			}
		} )();

	}, [] );

	return <Wrapper>
		<Title>Instagram</Title>
		<Line />
		{ error ? <ErrorComponent error={ error } /> : <>
			{ feedList.length > 0 && <FeedComponent list={ feedList } /> }
		</> }
	</Wrapper>;
};

const Wrapper = styled.section`
	padding: 15px;
	overflow: hidden;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
    margin: 0;
`;

const Line = styled.div`
	width: 100%;
    height: 1px;
    background-color: #dcdcdc;
    margin: 10px 0;
`;

const Content = styled.div`
	
`;

export {
	InstagramWidget,
	FeedItem
};
