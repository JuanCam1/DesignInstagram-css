import React from 'react';
import style from './Body.module.css';
import { users } from '../../data/data';
import { sugerencias } from '../../data/data';

import Estados from './estados/Estados';
import Sugerencias from './sugerencias/Sugerencias';
import Publicaciones from './publicaciones/Publicaciones';

const Body = () => {
  return (
    <section className={style.instBody}>
      <div className={style.instBodyDiv}>
        <div className={style.instCont}>
          <Estados users={users} />
          <Publicaciones />
        </div>
        <Sugerencias sugerencias={sugerencias} />
      </div>
    </section>
  );
};

export default Body;
