const productos = [
    {
      id: "1",
      nombre: 'Proteína Whey',
      precio: 12000,
      categoria: 'suplementos',
      imagen: '/assets/img/whey.png',
      descripcion: 'Proteína de alta calidad para ganar masa muscular.',
      stock: 10,
    },
    {
      id: "2",
      nombre: 'Creatina Monohidratada',
      precio: 8000,
      categoria: 'suplementos',
      imagen: '/assets/img/Creatina.png',
      descripcion: 'Mejora fuerza, potencia y rendimiento físico.',
      stock: 15,
    },
    {
      id: "3",
      nombre: 'Guantes de entrenamiento',
      precio: 3500,
      categoria: 'accesorios',
      imagen: '/assets/img/guantes.png',
      descripcion: 'Comodidad y agarre para tus rutinas de fuerza.',
      stock: 20,
    },
    {
      id: "4",
      nombre: 'Cinturón lumbar',
      precio: 5000,
      categoria: 'accesorios',
      imagen: '/assets/img/cinturon.png',
      descripcion: 'Protección para tu zona lumbar en ejercicios pesados.',
      stock: 8,
    },
  ];
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos), 1000);
    });
  };
  
  export const getProductoPorId = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos.find((p) => p.id === id)), 1000);
    });
  };
  