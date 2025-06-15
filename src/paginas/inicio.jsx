import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Inicio() {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    setOpen(open === id ? '' : id);
  };

  return (
    <div className="container bg-light p-4">
      <h1 className="text-center my-4">Bienvenido a La Academia</h1>
      <p className="text-center">
        Sumérgete en la riqueza cultural de Bolivia a través de sus danzas tradicionales. Descubre el significado, la historia y el ritmo de cada expresión artística que forma parte del folclore boliviano.
      </p>
      <div className="text-center">
        <img
          src="https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png"
          alt="Logo de La Academia"
          style={{ height: 100, width: 100 }}
        />
      </div>

      {/* Acordeón de Danzas Típicas */}
      <div className="mt-4">
        <Accordion flush open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Danza 1: Diablada</AccordionHeader>
            <AccordionBody accordionId="1">
              <div className="d-flex align-items-center">
                <img src="https://www.peru.travel/Contenido/General/Imagen/es/821/1.1/diablada-peru.jpg" alt="Diablada" style={{ width: 400, height: 'auto', marginRight: 20 }} />
                <p>La Diablada es una de las danzas más representativas del Carnaval de Oruro, declarado Patrimonio Oral e Intangible de la Humanidad por la UNESCO. Tiene un fuerte contenido simbólico que representa la lucha entre el bien y el mal, mezclando elementos de la cosmovisión andina con el cristianismo. Los bailarines usan llamativos trajes bordados, capas coloridas y máscaras de diablos con cuernos, ojos saltones y detalles brillantes. La coreografía incluye pasos imponentes y movimientos teatrales, acompañados por el sonido potente de las bandas de música, lo que genera un ambiente ceremonial y espectacular.</p>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Danza 2: Morenada</AccordionHeader>
            <AccordionBody accordionId="2">
              <div className="d-flex align-items-center">
                <img src="https://abi.bo/images/Noticias/Cultura/sep-22/MORENADA.jpg" alt="Morenada" style={{ width: 400, height: 'auto', marginRight: 20 }} />
                <p>La Morenada es una danza originaria del altiplano boliviano, especialmente popular en los departamentos de La Paz y Oruro. Su origen se vincula con la época colonial, y se interpreta como una sátira hacia la esclavitud de los afrobolivianos que eran obligados a trabajar en las minas. Los trajes de los bailarines son pesados y lujosos, con máscaras que presentan ojos saltones y rostros exagerados. El ritmo es pausado y elegante, caracterizado por el movimiento de hombros y un zapateo firme. Es una danza de gran riqueza cultural y artística, que se ha convertido en símbolo del folclore boliviano.</p>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Danza 3: Caporales</AccordionHeader>
            <AccordionBody accordionId="3">
              <div className="d-flex align-items-center">
                <img src="https://vivecandelaria.com/wp-content/uploads/2022/10/caporales_congreso_peru.jpg" alt="Caporales" style={{ width: 400, height: 'auto', marginRight: 20 }} />
                <p>Los Caporales es una danza folclórica creada en la década de 1970 por los hermanos Estrada en La Paz, inspirada en el personaje del “caporal”, capataz de los esclavos afrobolivianos durante la época colonial. Esta danza combina fuerza, juventud y devoción, especialmente a la Virgen del Socavón. Los bailarines varones visten con botas pesadas con cascabeles, pantalones ajustados y camisas brillantes, mientras que las mujeres lucen trajes cortos y sombreros elegantes. Los pasos son vigorosos y atléticos, con saltos, giros y zapateos que exigen gran resistencia física. Es una danza que representa poder, energía y liderazgo.</p>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">Danza 4: Tinku</AccordionHeader>
            <AccordionBody accordionId="4">
              <div className="d-flex align-items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Bailarinas_de_tinku_2.jpg" alt="Tinku" style={{ width: 400, height: 'auto', marginRight: 20 }} />
                <p>El Tinku es una danza tradicional originaria del norte de Potosí, especialmente en comunidades como Macha. Su nombre significa “encuentro” en quechua, y está inspirado en antiguos rituales donde se realizaban combates entre comunidades como ofrenda de sangre a la Pachamama (Madre Tierra). Esta danza se caracteriza por su fuerza, dinamismo y energía, representando enfrentamientos simbólicos entre bailarines. Los trajes son coloridos, con cascos decorados y accesorios que evocan la vestimenta guerrera. La música es intensa, con tambores, zampoñas y charangos, que acompañan el ritmo vibrante del baile.</p>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">Danza 5: Cueca Boliviana</AccordionHeader>
            <AccordionBody accordionId="5">
              <div className="d-flex align-items-center">
                <img src="https://www.opinion.com.bo/media/opinion/images/2019/09/17/2019091708050341118.jpg" alt="Cueca Boliviana" style={{ width: 400, height: 'auto', marginRight: 20 }} />
                <p>La Cueca es la danza nacional de Bolivia y se encuentra presente en todas las regiones del país, con distintas variantes según el lugar (cueca paceña, chuquisaqueña, cochabambina, entre otras). Es una danza de cortejo entre una pareja, donde el varón intenta conquistar a la dama mediante pasos elegantes, giros y el uso del pañuelo como herramienta de galantería. Los movimientos reflejan coquetería, picardía y amor. La música que acompaña es alegre y romántica, y la coreografía permite expresar emociones en una representación delicada de las relaciones humanas.</p>
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Inicio;