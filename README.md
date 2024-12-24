# React useState Hook Update Error

This repository demonstrates a common error when updating state in React functional components using the `useState` hook. The incorrect approach attempts to directly mutate the state variable, which does not trigger a re-render.

## Bug Description

The `bug.js` file contains a React functional component that attempts to increment a state variable directly without using the setter function provided by `useState`. This results in the state not being updated correctly.

## Solution

The `bugSolution.js` file shows the correct way to update state using the `setCount` function.  The solution uses functional updates to ensure that the state is correctly updated based on the previous value.