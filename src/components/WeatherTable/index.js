import React from 'react';
import Table from 'semantic-ui-react/dist/es/collections/Table';

const { Header, Row, HeaderCell, Body, Cell } = Table;

const Content = ({ data }) => (
    <Table celled>
        <Header>
            <Row>
                <HeaderCell>Parameters</HeaderCell>
                <HeaderCell>Value</HeaderCell>
            </Row>
        </Header>

        <Body>
            <Row>
                <Cell>Temperature</Cell>
                <Cell>{data?.main?.temp}</Cell>
            </Row>
            <Row>
                <Cell>Clouds</Cell>
                <Cell>{data?.weather[0].description}</Cell>
            </Row>
            <Row>
                <Cell>Wind speed</Cell>
                <Cell>{data?.wind?.speed}</Cell>
            </Row>
        </Body>
    </Table>
);

export default Content
