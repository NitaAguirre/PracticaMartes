import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

const OfertaCurso = () => {
  const [modal, setModal] = useState(false);
  const [cursoSeleccionado, setCursoSeleccionado] = useState({ nombre: '', precio: '' });

  const cursos = [
    {
      id: 1,
      nombre: "La Diablada - Ritmo y Tradición",
      descripcion: "Sumérgete en el poderío simbólico de la Diablada, una de las danzas más emblemáticas del folclore boliviano. En este curso aprenderás los pasos básicos y avanzados, el uso del vestuario tradicional, y el trasfondo cultural que representa la eterna lucha entre el bien y el mal, con raíces en rituales ancestrales y la festividad del Carnaval de Oruro.",
      imagen: "https://abi.bo/images/historico_1/diablos_de_Oruro.jpg",
      precio: "250$"
    },
    {
      id: 2,
      nombre: "Morenada - Historia y Elegancia Andina",
      descripcion: "Descubre el ritmo pausado y majestuoso de la Morenada, danza que simboliza la resistencia y la identidad cultural de los pueblos andinos. Este curso está diseñado para explorar el origen de la danza, los significados detrás de sus movimientos y trajes, así como la técnica corporal para ejecutar sus coreografías al ritmo de los tradicionales tambores y matracas.",
      imagen: "https://abi.bo/images/historico_1/CAPORAL.jpg",
      precio: "350$"
    },
    {
      id: 3,
      nombre: "Tinku - Danza de Encuentro y Fuerza",
      descripcion: "Conoce el arte del Tinku, una danza ritual que representa antiguos enfrentamientos ceremoniales de comunidades del norte de Potosí. Este curso combina expresión corporal, historia y coreografía, enseñándote a canalizar fuerza y equilibrio en una danza que simboliza el encuentro, la lucha y la unión de culturas indígenas bolivianas.",
      imagen: "https://elrinconboliviano.com/wp-content/uploads/2020/11/tinku-tradicional-de-bolivia_700x500.jpg",
      precio: "300$"
    }
  ];

  const toggle = (curso) => {
    setCursoSeleccionado(curso);
    setModal(!modal);
  };

  return (
    <div className="container my-4 mx-auto">
      <h1 className="text-center mb-4">Oferta de Cursos</h1>
      {cursos.map((curso) => (
        <Card key={curso.id} className="mb-3 d-flex flex-row align-items-center">
          <CardImg src={curso.imagen} alt={curso.nombre} style={{ width: 250, height: 'auto', marginRight: 20 }} />
          <CardBody>
            <CardTitle tag="h5">{curso.nombre}</CardTitle>
            <CardText>{curso.descripcion}</CardText>
            <Button color="primary" onClick={() => toggle(curso)}>Ver Precio</Button>
          </CardBody>
        </Card>
      ))}

      {/* Modal de Precio */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>Precio del Curso</ModalHeader>
        <ModalBody>
          <p><strong>Curso:</strong> {cursoSeleccionado.nombre}</p>
          <p><strong>Precio:</strong> {cursoSeleccionado.precio}</p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default OfertaCurso;