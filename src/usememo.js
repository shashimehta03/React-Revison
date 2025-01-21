import React, { useMemo, useState } from "react";

const Usememo = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    function expensiveTask(n) {
        console.log("Inside expensive function");
        for (let i = 0; i < 1000000000; i++) {} // Simulated expensive task
        return n * 2;
    }

    // Memoize the result of the expensive computation
    const doubleValue = useMemo(() => expensiveTask(Number(input) || 0), [input]);

    return (
        <div>
            <h2>useMemo Hook</h2>
            <ul>
                <li>Renders faster with optimized performance</li>
                <li>Prevents unnecessary rendering</li>
                <li>Handles expensive and complex tasks efficiently</li>
                <li>Stores results in memory for reuse</li>
            </ul>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            <input
                type="number"
                placeholder="Enter a number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div>
                Count: {count}
                <br />
                Double: {doubleValue}
            </div>
        </div>
    );
};

export default Usememo;
