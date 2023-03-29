const updateTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let hourStr = hours < 10 ? '0' + hours : hours.toString();
    let minStr = minutes < 10 ? '0' + minutes : minutes.toString();

    setTime(`${hourStr}:${minStr}`);
  }
  export default Time;