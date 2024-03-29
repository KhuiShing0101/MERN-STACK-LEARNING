import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { Button } from '@mui/material';
import { addMenu } from './store/slices/menuSlice';
import { addMenuCategory } from './store/slices/menuCategorySlice';

function App() {
  const dispatch = useAppDispatch();
  const {menus} = useAppSelector((state)=>state.menu)
  const {menuCategories} = useAppSelector((state)=>state.menuCategory)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button onClick={()=>dispatch(addMenu({id:1,name:"curry",price:2000}))}>
        Click Me
      </Button>
      <h1>{menus.length}</h1>
      <Button onClick={()=>dispatch(addMenuCategory({id:1,name:"onigiri",isAvailable:true}))}>
        click Menu Category
      </Button>
      <h1>{menuCategories.length}</h1>
    </div>
  );
}

export default App;
