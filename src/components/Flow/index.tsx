import ReactFlow, { Background }  from 'react-flow-renderer';

import { elements } from '../../repositories/elements';

export function Flow() {
    return (
        <div style={{ height: '99vh' }}>
            <ReactFlow 
                elements={elements} 
            >
                <Background
                    gap={12}
                    size={0.5}
                />
            </ReactFlow>
        </div>
    )
}
