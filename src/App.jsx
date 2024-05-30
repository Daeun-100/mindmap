import "./App.css";
import { useState, useRef } from "react";
import MindMapNode from "./components/MindMapNode";
import MindMap from "./components/MindMap";
function App() {
  const [mindMapNodes, setMindMapNodes] = useState([]);
  const nodeId = useRef(0);

  const upDateMindMapNode = (id, content) => {
    const newNodes = mindMapNodes.map((node) => {
      console;
      if (node.id == id) {
        console.log(id, content);
        console.log("........");
        return { id: id, content: content };
      } else {
        return node;
      }
    });
    console.log(newNodes);
    setMindMapNodes(newNodes);
  };

  const handleCreateBtnClick = () => {
    console.log("create button clicked");
    setMindMapNodes([
      ...mindMapNodes,
      { id: nodeId.current, content: "new node" },
    ]);
    nodeId.current++;
  };

  return (
    <>
      <button onClick={handleCreateBtnClick}>node Create</button>
      <MindMap
        mindMapNodes={mindMapNodes}
        upDateMindMapNode={upDateMindMapNode}
      ></MindMap>
    </>
  );
}

export default App;
