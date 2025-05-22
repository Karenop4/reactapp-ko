import React, { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';
import { db } from '../firebase';
import { onSnapshot } from 'firebase/firestore';

const producto = ({ texto }) => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0.0);
  const [stock, setStock] = useState(0.0);

  // Cargar registros de Firestore al montar componente
  

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      //setRegistros(docs);
    }, (error) => {
      console.error("Error escuchando cambios en Firestore:", error);
    });

    return () => unsubscribe();
  }, []);


  // Guardar o actualizar registro en Firestore
  const handleGuardar = async (e) => {
    e.preventDefault();

    
    const docRef = await addDoc(collection(db, "products"), { nombre, precio, stock });
    

    setNombre('');
    setPrecio('');
    setStock('');
  };

  

  return (
    <div>
      <h1>Registro productos</h1>
      <form onSubmit={handleGuardar}>
        <label htmlFor="txtnombre">Nombre:</label>
        <input
          id="txtnombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="txtprecio">Precio:</label>
        <input
          id="txtprecio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <label htmlFor="txtstock">Stock:</label>
        <input
          id="txtstock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />

        <button type="submit">
          {'GUARDAR'}
        </button>
      </form>
      
    </div>
  );
};

export default producto;