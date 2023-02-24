import { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { create, deleteAll } from './store/itemReducer';
import Item from './Item';

const App = () => {
  const { items } = useAppSelector((state) => state.item);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleCreate = () => {
    dispatch(create({ id: uuid(), name: value }));
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  return (
    <div className="app">
      <div className="buttons-container">
        <div>
          <input value={value} onChange={handleChange} />
          <button onClick={handleCreate}>Crear</button>
        </div>
        <button onClick={handleDeleteAll}>Borrar todos</button>
      </div>
      <div className="items-container">
        {items.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
