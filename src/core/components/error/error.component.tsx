import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";

interface IProps {
	error : Error
}

const ErrorComponent = ( props : IProps ) => {
	const {
		error
	} = props;

	useEffect( () => {
		console.debug( ErrorComponent.name, { error } );
	}, [] );

	return <>
		<Title>{ error.name }</Title>
		<Description>{ error.message }</Description>
	</>;
};

const Title = styled.h2`
	margin: 0;
`;

const Description = styled.h3`
	color: red;
	margin: 10px 0 0;
	padding-left: 10px;
`;

export {
	ErrorComponent
};
