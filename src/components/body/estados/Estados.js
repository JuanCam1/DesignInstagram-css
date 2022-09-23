import style from './Estados.module.css';

const Estados = ({ users }) => {
  return (
    <div className={style.instEstados}>
        {users.map((item) => {
          return (
            <div className={style.instEstado} key={item.id}>
              <div>
                <div>
                  <img src={item.url} alt={item.name} />
                </div>
              </div>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
  );
};

export default Estados;
