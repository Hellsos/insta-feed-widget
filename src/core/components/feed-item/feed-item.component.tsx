import * as React from "react";
import { useEffect } from "react";
import { FeedItem } from "../../../widgets/instagram.widget";
import styled from "styled-components";


interface IProps {
	feed : FeedItem
}

const FeedItemComponent = ( props : IProps ) => {
	const {
		feed
	} = props;

	useEffect( () => {
		console.debug( FeedItemComponent.name, { feed } );
	}, [] );

	const ImageHolder = styled.div`
		background-image: url(${ feed.media_type === "VIDEO" ? feed.thumbnail_url : feed.media_url });
		width: 100%;
		height: 100%;
		background-size: cover;
    	background-repeat: no-repeat;
	`;

	return <Wrapper>
		<LinkHolder href={ feed.permalink }
					target={ "_blank" }>
			<ImageHolder />
		</LinkHolder>
	</Wrapper>;
};

const Wrapper = styled.li`
	display: flex;
    margin: 5px;
	min-width: 100px;
	min-height: 100px;	
`;

const LinkHolder = styled.a`
	width: 100%;
	height: 100%;
`;

export {
	FeedItemComponent
};
