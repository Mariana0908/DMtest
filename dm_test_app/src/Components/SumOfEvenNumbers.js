import { useState } from "react";


const SumOfEvenNumbers = ({ numbers }) => {
  //Estado local para almacenar el arreglo de números y la entrada del usuario
  const [numArray, setNumArray] = useState(numbers);
  const [newNumber, setNewNumber] = useState("");

  // Función para calcular la suma de los números pares
  const sumEvenNumbers = (arr) => {
    return arr.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  };

  // Manejador para agregar un nuevo número
  const handleAddNumber = () => {
    const parsedNumber = parseInt(newNumber, 10);
    if (!isNaN(parsedNumber)) {
      setNumArray([...numArray, parsedNumber]);
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Suma de Números Pares: {sumEvenNumbers(numArray)}</h2>
      <input
        type="text"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
        placeholder="Agrega un número"
      />
      <button onClick={handleAddNumber}>Agregar</button>
    </div>
  );
};

export default SumOfEvenNumbers;