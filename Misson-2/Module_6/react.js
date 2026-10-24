const { useState } = require("react");

// Imperative Programming 
const btn = document.createElement('button');
btn.innerText = 'Click Me';
btn.style.backgroundColor = 'blue';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'red';
    btn.innerText = 'Clicked';
});


// Declarative programming with React
function App() {
    const [clicked, setClicked] =  useState(false);

    return (
        <button style={{ backgroundColor: clicked? 'red': 'blue'}}
            onClick={() => setClicked(true)}
        >
            {clicked ? 'Clicked!' : 'Click Me'}
        </button>
    );
}

// React give us DX = Developer Experience
// React is a UI(user interface) library

//  react is mainly combination of ---> 1. react(algorithm |scheduler(react fiber)) 2. react dom (transition layer)
// in react Data = state

// What is Reconciliation or react reconciler?
// React reconciler compare with new virtual dom with existing virtual dom. And find out(detect) where is change happened.

// Actually 2. react dom Edit main dom with changed virtual dom data

// scheduler=react fiber

// A package manager is a tool that automates installing, upgrading, configuring, and removing software or code libraries on your computer

/*  Package managers generally fall into two categories:
    1.System-Level Package Managers (manage applications and tools across your entire operating system):
    Linux: apt (Ubuntu/Debian), DNF / Yum (Fedora/RHEL)
    2.Language-Specific Package Managers (manage code libraries for specific programming projects):
    • JavaScript / Node.js: npm or Yarn --> pnpm, bun
    • Python: pip
 */
