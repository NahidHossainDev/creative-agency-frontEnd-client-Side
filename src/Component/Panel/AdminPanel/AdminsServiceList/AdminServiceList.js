import React, { useContext } from 'react';
import Panel from '../../Panel';
import { ContextElement } from '../../../../App';
import Table from './Table';

const AdminServiceList = () => {
    
    return (
        <Panel>
            <Table/>
        </Panel>
    );
};

export default AdminServiceList;