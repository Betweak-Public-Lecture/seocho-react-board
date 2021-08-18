import React, { Component, useState, useEffect, useMemo } from "react";

class ClassBlink extends Component {
  constructor(props) {
    super(props);
    // 상태를 관리하겠다.
    this.state = {
      showText: true,
    };

    // setInterval(함수, ms) // ms마다 함수를 실행하겠다.
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 3000);
  }

  render() {
    // state값에 따라 화면에 출력할 ui 정의
    let display = this.state.showText ? this.props.text : "";
    return <div>{display}</div>;
  }
}

function Blink({ text, ms = 3000, activated = true }) {
  // React hook useState(state의 초기값): state를 사용하겠다.
  const [showText, setShowText] = useState(true);

  // 상태(2번째 인자:배열에 넣은)가 변화할 때마다 다음 함수를 호출해줘!
  // 2번째 인자가 빈 배열일 때 ==> component 생성시 한 번 호출되고 다시 호출되지 않음.
  useEffect(() => {
    setInterval(() => {
      setShowText((showText) => {
        return !showText;
      });
    }, ms);
  }, []);

  const display = useMemo(() => {
    return showText || !activated ? text : "";
  }, [showText, text, activated]);

  return <div>{display}</div>;
}

export default Blink;
