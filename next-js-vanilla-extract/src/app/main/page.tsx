import * as style from "./styles.css";

const Main = () => {
  return (
    <>
      <div className={style.container}>
        <h1>Main</h1>
        <p>Some content</p>
      </div>
      <div className={style.box}>
        <h2>Box</h2>
        <p>Some content</p>
      </div>
    </>
  );
};

export default Main;
