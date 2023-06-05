import React, { useRef } from 'react';

function UndoRedoExample ()  {
  const textRef = useRef('');
  const historyRef = useRef([]);
  const currentStepRef = useRef(-1);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    textRef.current = newText;
  };

  const handleUndo = () => {
    if (currentStepRef.current > 0) {
      currentStepRef.current--;
      const previousStep = historyRef.current[currentStepRef.current];
      textRef.current = previousStep;
    }
  };

  const handleRedo = () => {
    if (currentStepRef.current < historyRef.current.length - 1) {
      currentStepRef.current++;
      const nextStep = historyRef.current[currentStepRef.current];
      textRef.current = nextStep;
    }
  };

  const handleSave = () => {
    const newText = textRef.current;
    historyRef.current = historyRef.current.slice(0, currentStepRef.current + 1);
    historyRef.current.push(newText);
    currentStepRef.current = historyRef.current.length - 1;
  };

  return (
    <div>
      <input value={textRef.current} onChange={handleTextChange} />
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UndoRedoExample;
