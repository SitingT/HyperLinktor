// src/ModelList.tsx

import React from "react";
import "./ModelList.css";

interface Model {
  id: number;
  name: string;
  return: number;
}

interface ModelListProps {
  models: Model[];
}

const ModelList: React.FC<ModelListProps> = ({ models }) => {
  return (
    <div className="model-list-container">
      <table>
        <thead>
          <tr>
            <th>Model Name</th>
            <th>Model Return</th>
            <th>Coin Earned</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.id}>
              <td>{model.name}</td>
              <td>{model.return.toFixed(2)}</td>
              <td>{model.return > 0 ? (model.return * 10).toFixed(2) : 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModelList;
