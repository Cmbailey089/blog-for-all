module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },

    auto_cap: (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}