import MindMapNode from "./MindMapNode";

const MindMap = ({ mindMapNodes, upDateMindMapNode }) => {
  return (
    <div>
      {mindMapNodes.map((mindMapNode) => (
        <MindMapNode
          upDateMindMapNode={upDateMindMapNode}
          key={mindMapNode.id}
          nodeId={mindMapNode.id}
          nodeContent={mindMapNode.content}
        ></MindMapNode>
      ))}
    </div>
  );
};

export default MindMap;
