import React from 'react';
import style from './Sugerencias.module.css';

const Sugerencias = ({sugerencias}) => {
  const perfil ='https://randomuser.me/api/portraits/men/1.jpg';
  return (
    <div className={style.instSuge}>
      <div className={style.instSugeCont}>
        <div className={style.instSugePerfil}>
          <div className={style.instSugePerfilImg}>
            <img src={perfil} alt='Juan' />
          </div>

          <div className={style.instSugePerfilName}>
            <div>
              <span>juancad1216</span>
              <span>Juan Camilo</span>
            </div>
            <div>
              <span>Cambiar</span>
            </div>
          </div>
        </div>

        <div className={style.instSugeParaTi}>
          <div className={style.instSugeParaTiSug}>
            <p>Sugerencias para ti</p>
            <span>Ver todo</span>
          </div>

          {sugerencias.map((item) => {
            return (
              <div className={style.instSugeParaTiSugs} key={item.id}>
                <div>
                  <div className={style.instImgSug}>
                    <img src={item.url} alt={item.name} />
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.text}</p>
                  </div>
                </div>
                <div>
                  <span>Seguir</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className={style.instOpciones}>
          <div>
            <div>Informacion</div>
            <div>Ayuda</div>
            <div>Prensa</div>
            <div>API</div>
            <div>Empleo</div>
            <div>Privacidad</div>
            <div>Condiciones</div>
            <div>Ubicaciones</div>
            <div>Idioma</div>
          </div>
          <span>&copy; 2022 INSTAGRAM FROM META</span>
        </div>
      </div>
    </div>
  );
};

export default Sugerencias;
