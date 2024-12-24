```javascript
// Incorrect way to update state in React functional component
function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    count = count + 1; // This is incorrect!
    setCount(count); // This will not work as expected
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```