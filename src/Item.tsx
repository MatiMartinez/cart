import { useState } from 'react';
import './App.css';

interface Props {
  id: string;
  name: string;
}

const Item: React.FC<Props> = ({ id, name }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className="item">
      <span>{id}</span>
      <h4>{name}</h4>
      <input value={value} onChange={handleChange} />
      <button onClick={() => {}}>Editar</button>
      <button onClick={() => {}}>Borrar</button>
    </div>
  );
};

export default Item;
