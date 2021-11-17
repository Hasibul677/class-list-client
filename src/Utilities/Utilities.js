export const processTime = (time = "00:09") => {
  let [hour, minute] = time.split(":");
  let meridian, h;
  if (hour > 12) {
    meridian = "PM";
    h = hour - 12;
  } else if (hour <= 12) {
    meridian = "AM";
    h = hour;
    if (hour == 12) {
      meridian = "PM";
    }
    if (hour == "00") {
      h = 12;
    }
  }
  return `${h}:${minute} ${meridian}`;
};

export const processDate = (date) => {
  const [d, m, y] = date.split("/");
  return `${y}-${m}-${d}`;
};




// const [time, setTime] = useState();


// let time1 = `${processTime(classTime)}:00`
// let array1 = time1.split(":");
// let seconds1 = (parseInt(array1[0], 10) * 60 * 60) + (parseInt(array1[1], 10) * 60) + parseInt(array1[2], 10);

// let currentTime = new Date();
// let countDown = currentTime.toLocaleTimeString();
// let time2 = `${processTime(countDown)}:00`
// let array2 = time2.split(":");
// let seconds2 = (parseInt(array2[0], 10) * 60 * 60) + (parseInt(array2[1], 10) * 60) + parseInt(array2[2], 10);



// useEffect(() => {
//     let mainTime = seconds1 - seconds2
//     const interval = setInterval(() => {
//       setTime(mainTime => mainTime - 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);