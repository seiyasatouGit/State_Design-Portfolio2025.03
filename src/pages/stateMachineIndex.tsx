// src/pages/StateMachineIndex.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';


const StateMachineIndex = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🧭 状態設計ポートフォリオ</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link to="/visualization-entry" className="text-blue-600 hover:underline">
            STEP 1: React Flow で状態図を仮表示
          </Link>
        </li>
        <li>
          <Link to="/parse-json-to-graph" className="text-blue-600 hover:underline">
            STEP 2: JSON → ノード&エッジ変換ロジック
          </Link>
        </li>
        <li>
          <Link to="/event-handling" className="text-blue-600 hover:underline">
            STEP 3: ノードクリック → 状態イベント処理
          </Link>
        </li>
        {/* 必要に応じてどんどん追加 */}
      </ul>
    </div>
  );
};

export default StateMachineIndex;