const formatTime = date => {
  const year = date.getFullYear()
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const day = `0${date.getDate()}`.slice(-2)
  const hour = `0${date.getHours()}`.slice(-2)
  const minute = `0${date.getMinutes()}`.slice(-2)
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate = stamp =>{
  const date=new Date(stamp)
  const Y = new Date(stamp).getFullYear();
  const M = convertTwo(date.getMonth()+1);
  const D = convertTwo(date.getDate());

  return `${Y}-${M}-${D}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const formatParams = data=>{
  let arr = [];
  for (let name in data) {
      arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
  }
  arr.push(("v=" + Math.random()).replace(".", ""));
  return arr.join("&");
};


module.exports = {
  formatTime: formatTime,
  formatParams,
}

function convertTwo(s){
  return `0${s}`.slice(-2)
}