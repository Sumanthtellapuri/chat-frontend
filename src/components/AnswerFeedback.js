import React from "react";

function AnswerFeedback() {
  return (
    <div className="flex space-x-2 mt-1">
      <button className="px-2 py-1 bg-green-400 rounded">👍</button>
      <button className="px-2 py-1 bg-red-400 rounded">👎</button>
    </div>
  );
}

export default AnswerFeedback;
