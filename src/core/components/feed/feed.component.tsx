import * as React from "react";
import { useEffect } from "react";
import { FeedItem } from "../../../widgets/instagram.widget";
import styled from "styled-components";
import { FeedItemComponent } from "../feed-item/feed-item.component";

interface IProps {
	list : Array<FeedItem>
}

const FeedComponent = ( props : IProps ) => {
	const {
		list
	} = props;

	useEffect( () => {
		console.debug( FeedComponent.name, { list } );
	}, [] );

	return <Wrapper>
		{ list.map( ( item ) => {
			return <FeedItemComponent key={ item.id }
									  feed={ item } />;
		} ) }
	</Wrapper>;
};

const Wrapper = styled.div`
	display: flex;
    flex-wrap: wrap;
    margin: -10px;
    justify-content: center;
`;

export {
	FeedComponent
};
