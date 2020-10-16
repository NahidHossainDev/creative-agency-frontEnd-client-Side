import React, { useContext } from 'react';
import Panel from '../../Panel';
import { ContextElement } from '../../../../App';

const AdminServiceList = () => {
    const [panelName, setPanelName] = useContext(ContextElement);

    setPanelName('Service List')
    return (
        <Panel>
            <h1>this is AdminServiceList</h1>
        </Panel>
    );
};

export default AdminServiceList;