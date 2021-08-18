import React, { Component, useState, useMemo, useCallback } from "react";
import Blink from "../Blink/Blink";

function BlinkBox({ text, ms }) {
  const [activated, setActivated] = useState(true);

  // 상태(2번째 인자:배열에 넣은)가 변화할 때마다 다음 함수 다시 만들어줘!
  // 2번째 인자가 빈 배열일 때 ==>
  // component 생성시 한 번 함수가 만들어지고 다시 생성되지 않음
  const btnClick = useCallback(() => {
    setActivated((activated) => !activated);
  }, []);
  //   const btnClick = () => {
  //     setActivated(!activated);
  //     // setActivated((activated) => {
  //     //   return !activated;
  //     // });
  //   };
  const activatedText = useMemo(() => {
    return activated ? "비활성" : "활성";
  }, [activated]);

  return (
    <div>
      <button onClick={btnClick}>{activatedText}</button>
      <Blink text={text} ms={ms} activated={activated} />
    </div>
  );
}

class ClassBlinkBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: true,
    };
  }

  btnClick() {
    this.setState({ activated: !this.state.activated });
  }
  render() {
    let activatedText = this.state.activated ? "비활성" : "활성";
    return (
      <div>
        <button
          // onClick={this.btnClick.bind(this)}
          onClick={() => {
            this.setState({ activated: !this.state.activated });
          }}
        >
          {activatedText}
        </button>
        <Blink
          text={this.props.text}
          ms={this.props.ms}
          activated={this.state.activated}
        />
      </div>
    );
  }
}
export default ClassBlinkBox;
// export default BlinkBox;
