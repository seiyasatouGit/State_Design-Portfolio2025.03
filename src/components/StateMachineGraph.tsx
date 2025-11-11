// src/components/StateMachineGraph.tsx
import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

import { parseStateMachine } from '../utils/parseStateMachine';







const sampleJson = {
    initial: 'idle',
    states: {
      idle: { on: { FETCH: 'loading' } },
      loading: {
        on: {
          RESOLVE: 'success',
          REJECT: 'failure'
        }
      },
      success: {},
      failure: { on: { RETRY: 'loading' } }
    }
  };

// 仮ノード & エッジ（手打ち）
const nodes = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'Idle' },
    type: 'default',
  },
  {
    id: '2',
    position: { x: 300, y: 100 },
    data: { label: 'Loading' },
    type: 'default',
  },
  {
    id: '3',
    position: { x: 500, y: 100 },
    data: { label: 'Success' },
    type: 'default',
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', label: 'FETCH' },
  { id: 'e2-3', source: '2', target: '3', label: 'RESOLVE' },
];

const StateMachineGraph: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};


const { nodes, edges } = parseStateMachine(sampleJson);


export default StateMachineGraph;
