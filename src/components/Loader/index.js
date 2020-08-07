import React from 'react';
import Dimmer from 'semantic-ui-react/dist/es/modules/Dimmer';
import SemanticLoader from 'semantic-ui-react/dist/es/elements/Loader';


const Loader = () => (
    <>
        <Dimmer active inverted>
            <SemanticLoader inverted content='Loading' />
        </Dimmer>
    </>
);

export default Loader;
