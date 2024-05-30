const MindMapNode = ({ nodeContent, nodeId, upDateMindMapNode }) => {
  const handleNodeContentChange = (e) => {
    console.log(e.target.id);
    upDateMindMapNode(e.target.id, e.target.value);
  };
  return (
    <input
      id={nodeId}
      onChange={handleNodeContentChange}
      value={nodeContent}
      className="node_contianer"
    ></input>
  );
};

export default MindMapNode;
