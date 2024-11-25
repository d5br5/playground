import ResponsiveBox from "@/components/system/ResponsiveBox";
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
      <ResponsiveBox
        padding={{ mobile: "small", tablet: "medium", desktop: "large" }}
        margin={{ mobile: "small", desktop: "xlarge" }}
        display={{ mobile: "block", tablet: "flex" }}
        textAlign={{ mobile: "center", tablet: "right", desktop: "left" }}
      >
        반응형 스타일링
      </ResponsiveBox>
    </>
  );
};

export default Main;
