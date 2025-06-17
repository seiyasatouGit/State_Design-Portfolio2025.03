// src/utils/parseStateMachine.ts

export type StateMachineDefinition = {
    initial: string;
    states: {
      [state: string]: {
        on?: { [event: string]: string };
      };
    };
  };
  
  export function parseStateMachine(
    def: StateMachineDefinition
  ): { nodes: any[]; edges: any[] } {
    const nodes = [];
    const edges = [];
    let x = 0;
  
    for (const [state, config] of Object.entries(def.states)) {
      nodes.push({
        id: state,
        data: { label: state },
        position: { x: x * 200, y: 100 },
      });
      x++;
  
      if (config.on) {
        for (const [event, target] of Object.entries(config.on)) {
          edges.push({
            id: `${state}-${target}`,
            source: state,
            target: target,
            label: event,
          });
        }
      }
    }
  
    return { nodes, edges };
  }
  